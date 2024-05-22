import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const adminLogin = async (username, password) => {
  try {
    const docRef = doc(db, "admin", "super");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.username === username && data.password === password) {
        return { success: true, message: "Giriş başarılı" };
      }
    }
    return { success: false, message: "Kullanıcı adı ya da şifre hatalı" };
  } catch (error) {
    console.log(error.message);
    return { success: false, message: "Kullanıcı adı ya da şifre hatalı" };
  }
};
