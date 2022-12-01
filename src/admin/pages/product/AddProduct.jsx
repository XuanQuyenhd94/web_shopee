import React, { useState, useEffect } from 'react'
import { Button, Form , Modal } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import Classify from '../../components/classify/Classify'
import { useDispatch, useSelector } from "react-redux"
import { selectCatalogies, getCatalogies } from "../../../redux/AdminCatalogies/AdminCatalogiesSlice"
import {addProduct} from "../../../redux/Products/ProductsSlice"
import LoadingPage from '../../../views/loadding/LoadingPage'
import { coverString, createFileName } from '../../../ultils/constant'
import slug from 'slug'
import {storage} from '../../../config/firebase'
import { uploadBytesResumable ,ref, getDownloadURL} from 'firebase/storage'
import shortid from 'shortid'
import { toast } from 'react-toastify'

function AddProduct() {

    const navigate = useNavigate();
    const [classify, setClassify] = useState([]);
    const [dataClassify, setDataClassify] = useState([]);
    const dispatch = useDispatch();
    const catalogies = useSelector(selectCatalogies);
    const listKey = Object.keys(catalogies.data);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState(null);
    const [type, setType] = useState(null);

    const [cataSelect, setCataSelect] = useState(null);
    const [nameProduct, setNameProduct] = useState(null);
    const [price, setPrice] = useState(null);
    const [sale, setSale] = useState(null);
    const [avatar, setAvatar] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        let init = {          
            data: ""
        }
        let data = [...classify, init]
        setClassify(data) ; 
        // console.log(classify);
    }
    const handleClose = () => {
        setShow(false) ;
        setClassify([]);
        
    };
    const handleShow = () => {        
        
        setShow(true)
    };  
    const handleChange = (e)=>{
        let ipData = coverString(e.target.value) ;        
        setInput(ipData) ;
    }
    const handleSubmitModal = ()=>{
        setShow(false);
        let cloneClassify = [...classify] ;
        let objClassify = {
            type:type,
            data:cloneClassify
        };      
        let cloneData = [...dataClassify , objClassify] ;
        setDataClassify(cloneData);
        handleClose();        

    }
    const handleOnBlur = ()=>{
        let dataClone = [...classify] ;
        let length = dataClone.length ;
        dataClone[length - 1].data = input ;
        setClassify(dataClone) ;

        // console.log(classify);
    }    

    const handleChangeInput = (e)=>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setPrice(e.target.value)
        }
    }
    const UploadFile = (file)=>{   
        let slugTitle = slug(nameProduct + shortid.generate());           
        let fileName = createFileName(slugTitle,file.name);        
                
        if(!file) return ;
        const storageRef = ref(storage,`/products/${fileName}`) ;
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
                let cloneAvatar = [...avatar , url]  ;
                setAvatar(cloneAvatar);
            })
        }
        )
    }
    const handleSelectCatalogy = (e)=>{
        setCataSelect(e.target.value);
        // let arrKey = Object.keys(catalogies.data);    
        // let values = arrKey.filter(item =>{            
        //     if (catalogies.data[item].title===cataSelect) {
        //         return item;
        //     }
        // })
        // // console.log(values[0]);
    }
    const handleSubmit = ()=>{        
        let arrKey = Object.keys(catalogies.data);    
        let values = arrKey.filter(item =>{            
            if (catalogies.data[item].title===cataSelect) {
                return item;
            }
        })
        let idCatalogy = values[0] ;
        let data = {
            idCata:idCatalogy,
            name:nameProduct,
            slug:(slug(nameProduct + shortid.generate())),
            price:price,
            sale:sale,
            avatar:avatar,
            classify:dataClassify
        }
        console.log(data);
        dispatch(addProduct(data))
        .unwrap()
            .then(res => {
                handleClose();
                toast.success('Thêm mới thành công !',{
                    position:'top-center',
                    autoClose:2000,        
                    pauseOnHover: false,
                });
                navigate('/admin/products');                   
            })
    }
    useEffect(() => {
        dispatch(getCatalogies());
    }, []);
    return (
        <>
            {
                catalogies.loading === true ? (<LoadingPage />) : (
                    <>
                        <Button variant='primary'
                            onClick={()=>{
                                navigate('/admin/products')
                            }}
                        >Quay lại</Button>
                        <hr />
                        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Thêm sản phẩm</h2>
                        <br />

                        <Form style={{ width: "50%", margin: "0 auto" }}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Danh Mục</Form.Label>
                                <Form.Select onChange={(e)=>{
                                    handleSelectCatalogy(e);                                    
                                }}>
                                    <option value="">Lựa chọn</option>
                                    {
                                        listKey?.map(i => {
                                            return (
                                                <option>
                                                    {
                                                        catalogies?.data[i]?.title
                                                    }
                                                </option>

                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tên Sản Phẩm</Form.Label>
                                <Form.Control type="text" placeholder="Tên sản phẩm"
                                value={nameProduct}
                                onChange={(e)=>{
                                    setNameProduct(e.target.value);
                                }}                                 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Giá Tiền</Form.Label>
                                <Form.Control type="text" placeholder="Giá Tiền"
                                value={price}
                                onChange={(e) => handleChangeInput(e)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{display:"block"}}>Sale</Form.Label>
                                <Form.Control type="number" min={0} max={100} defaultValue={0} style={{width:"100px",display:"inline-block"}}
                                    value={sale}
                                    onChange={(e)=>{
                                        setSale(e.target.value);
                                    }}
                                /> %
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phân Loại</Form.Label>
                                <Button style={{ marginLeft: "5%" }} variant='success'
                                    onClick={handleShow}
                                >+</Button> 
                                {
                                    classify===[] ? (<></>):
                                    (
                                        <Classify  classify={dataClassify}/>
                                    )
                                }                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Hình ảnh</Form.Label>
                                <Form.Control type="file" accept='image/*'
                                    onChange={(e)=>{
                                        setProgress(0);                                        
                                        UploadFile(e.target.files[0]);  
                                    }}
                                disabled = {nameProduct ===null || nameProduct.trim()==="" ? true:false}
                                />
                            </Form.Group>
                            <h2>Đã Upload : {progress} %</h2>
                            <br />
                            {
                                avatar?.map((item)=>{
                                    return (
                                        <img src={item} alt="" width={"100px"} style={{display:"inline-block"}} />
                                    )
                                })
                            }
                            <br />
                            <Button variant="primary"
                                onClick={handleSubmit}
                            >
                                Thêm
                            </Button>
                        </Form>
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Phân Loại</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                            
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên..."
                                        autoFocus                                       
                                        onChange={(e)=>{                                            
                                            let data = coverString(e.target.value)
                                            setType(data);
                                        }}                                                             
                                    />
                                </Form.Group> 
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{display:"flex" , alignItems:"center"}}>                            
                                    <Form.Control style={{width:"100px",display:"inline-block",marginRight:"10px"}}
                                        type="text"
                                        placeholder="Giá trị..."
                                        autoFocus
                                        onChange={(e)=>handleChange(e)}                       
                                    />
                                </Form.Group>                                */}
                                <Button variant='success' onClick={handleClick}>+</Button> 
                                {                                    
                                    classify===[] ? (<>                                        
                                    </>)
                                    :(
                                        <>
                                            <hr />
                                            {classify.map(i =>{
                                                return (
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                            
                                                        <Form.Control style={{width:"100px"}}
                                                            type="text"
                                                            placeholder="Giá trị..."
                                                            autoFocus 
                                                            onChange={(e)=>handleChange(e)}    
                                                            onBlur = {handleOnBlur}                  
                                                        />
                                                    </Form.Group>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                            <Button variant="primary" onClick={handleSubmitModal}>
                                Xác nhận
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </>)
            }
        </>

    )
}

export default AddProduct