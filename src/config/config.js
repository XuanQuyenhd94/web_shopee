const {
    REACT_APP_FB_API_KEY ,
    REACT_APP_FB_AUTH_DOMAIN ,
    REACT_APP_FB_PROJECT_ID,
    REACT_APP_FB_STORAGE_BUCKET,
    REACT_APP_FB_MESSAGING_SENDER_ID,
    REACT_APP_FB_APP_ID,
    REACT_APP_SIGN_IN,
    REACT_APP_SIGN_UP,
    REACT_APP_BASE_URL,
    REACT_APP_LOOK_UP
  } = process.env ;

export const fireBaseConfig = {
    apiKey : REACT_APP_FB_API_KEY,
    authDomain: REACT_APP_FB_AUTH_DOMAIN,
    projectID : REACT_APP_FB_PROJECT_ID,
    storageBucket : REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderID : REACT_APP_FB_MESSAGING_SENDER_ID,
    appID : REACT_APP_FB_APP_ID
}
export const authen = {
    signIn : REACT_APP_SIGN_IN,
    signUp : REACT_APP_SIGN_UP,
    lookUp : REACT_APP_LOOK_UP,
    apiKey : REACT_APP_FB_API_KEY
}
export const baseURL = REACT_APP_BASE_URL