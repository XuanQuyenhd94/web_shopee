import React, { useState , useEffect , useRef} from 'react'
import slug from 'slug'
import {storage} from '../../../config/firebase'
import { Container , Modal ,Form , Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import TableAdmin from '../../components/table/TableAdmin'
import { uploadBytesResumable ,ref, getDownloadURL} from 'firebase/storage'
import { coverString, createFileName} from '../../../ultils/constant'
import {useDispatch , useSelector} from "react-redux"
import {addCatalogies, deleteCatalogy, getCatalogies,selectCatalogies, updateCatalogies} from "../../../redux/AdminCatalogies/AdminCatalogiesSlice"
import LoadingPage from "../../../views/loadding/LoadingPage"
import {ToastContainer , toast} from "react-toastify"
import shortid from "shortid" ;

function AdminCatalogy() {

    const navigate = useNavigate();
    const catalogies = useSelector(selectCatalogies); 
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState(null);
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);
    const [edit, setEdit] = useState(false);
    const [idItem, setIdItem] = useState(null);
    const [title, setTitle] = useState(null);
    // const titleRef = useRef(null);    

    const handleClose = () => {
        setShow(false) ;
        setEdit(false);
    };
    const handleShow = () => {   
        setProgress(0)     
        setShow(true)
    };    
    /**truyền prop vào bảng 
     * headding
     * body lấy từ redux
    */
    const data ={
        headding:  [
            "STT","Tên Danh Mục" , "Hình Ảnh"
        ],
        data : catalogies
    }    
    
    // console.log(slug("sản phẩm catalogy 1211"));

    const UploadFile = (file , title)=>{   
        let slugTitle = slug(title);           
        let fileName = createFileName(slugTitle,file.name);                
        setAvatar(fileName);
        if(!file) return ;
        const storageRef = ref(storage,`/catalogy/${fileName}`) ;
        const uploadTask = uploadBytesResumable(storageRef , file) ;
        uploadTask.on("state_changed", (snap)=>{
            const prog = Math.round((snap.bytesTransferred / snap.totalBytes)*100) ;
            // console.log(prog);
            setProgress(prog);
        }
        ,(err)=>{
            console.log(err);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(url =>{
                setAvatar(url);
            })
        }
        )
    }
    const handleBack = () => {
        // navigate()
    }   
    const handleSubmit = ()=>{

        if(edit){
            //khi click vào edit  
            console.log(avatar , title ,idItem);
            dispatch(updateCatalogies({
                id : idItem,
                title:coverString(title),
                avatar:avatar,
                slug : slug(title + shortid.generate())
            }))
            .unwrap()
            .then(res => {
                handleClose();
                if (res.error==="Permission denied") {
                    alert("token hết hạn")                    
                    navigate("/login") ;
                }
                else{
                    toast.success('Update thành công !',{
                        position:'top-center',
                        autoClose:2000,        
                        pauseOnHover: false,
                    });
                }
                                   
            })      
        }
        else{
            //khi click vào add   
                   
            dispatch(addCatalogies({
                title:coverString(title),
                avatar:avatar,
                slug : slug(title + shortid.generate())
            }))
            .unwrap()
            .then(res => {
                handleClose();
                toast.success('Thêm mới thành công !',{
                    position:'top-center',
                    autoClose:2000,        
                    pauseOnHover: false,
                });                    
            })
            
        }
    }
    const handleDelete = (id)=>{
        console.log(id);
        dispatch(deleteCatalogy({id : id}))
        .unwrap()
        .then(res => {
            handleClose();
            toast.success('Delete thành công !',{
                position:'top-center',
                autoClose:2000,        
                pauseOnHover: false,
            });                    
        }) 
    }

    useEffect(() => {
        dispatch(getCatalogies()) ;  
        
    },[]);    
    return (
       <>
        {
            catalogies.loading ===true ? (<LoadingPage/>):(
                <Container>
                    <div className="admin-button-wrapper">
                        <button onClick={handleShow}>Thêm Mới</button>
                        <button onClick={() => handleBack}>Quay Lại</button>
                    </div>
                    <div className="admin-heading">
                        Bảng Danh Mục Sản Phẩm
                    </div>
                    <br />
                    <TableAdmin tableData = {data} isEdit = {(isEdit , idItem)=>{
                        setEdit(isEdit) ; 
                        setIdItem(idItem);                         
                        handleShow() ; 
                        let item = catalogies.data[idItem] ;
                        setAvatar(item.avatar);
                        setTitle(item.title); 
                    }}
                        deleteItem = {handleDelete}
                        show ={false}
                    />
                    <br />
                   {/* pagination = > truyền trang số ?  */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{!edit ? "Thêm Mới Danh Mục":"Update Danh Mục"}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                            
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên danh mục"
                                        autoFocus                                        
                                        value={title}
                                        onChange={(e)=>{setTitle(e.target.value)}}                                    
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Hình Ảnh</Form.Label>
                                    <Form.Control type='file' accept='image/*'
                                        onChange={(e)=>{
                                            setProgress(0);
                                            UploadFile(e.target.files[0],title);  
                                        }}
                                    />
                                </Form.Group>
                                <br />
                                <h2>Đã Upload : {progress} %</h2>
                                <br />
                                <img src={avatar} 
                                    alt="" width={"100px"}                         
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                            <Button variant="primary" onClick={handleSubmit} disabled={edit ? false : progress < 100 ? true : false} >
                                {edit ? "Update" : "Thêm Mới"}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <ToastContainer/>
                </Container>
            )
        }
       </>

    )
}

export default AdminCatalogy