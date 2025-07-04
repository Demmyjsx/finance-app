import { supabase } from "../config/db";

export const emailSignin=async(email,pass)=>{
    try {
        const {data,error}=await supabase.auth.signInWithPassword({
        email:email,
        password:pass
    })
    if(error){
        return(error)
    }
    else{
        return data
    }
    } catch (error) {
    console.error("Unexpected error during email sign-in:", err.message);
    return { error: err };
    }
}

export const OauthSignin=async()=>{
    try {
        const{data,error}=await supabase.auth.signInWithOAuth({
        provider:'google',

    })
        if(error){
        return(error)
    }
    else{
        return data
    }
    } catch (error) {
    console.error("Unexpected OAuth error:", err.message);
    return { error: err };
    }
}

export const signOut=async()=>{
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign-out error:", error.message);
      return { error };
    }
    return { success: true };
  } catch (err) {
    console.error("Unexpected sign-out error:", err.message);
    return { error: err };
  }
}