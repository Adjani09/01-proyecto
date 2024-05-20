'use client'
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';


export default function Page() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();


  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        try {
          const userData = JSON.parse(userDataString);
          setUserData(userData);
        } catch (error) {
          console.error('Error al analizar los datos del usuario:', error);
          console.log("Error al analizar los datos del usuario");
        }
      }
    }else {
      router.push('/login'); 
    }
  }, [router]);

  return (
    <div>
      <p>Bienvenido a la Página principal después del login</p>;
      {userData && (
        <div>
          {/* <p>Nombre: {userData.email}</p> */}
          {/* Mostrar otros datos del usuario según sea necesario */}
        </div>
      )}
    </div>
  )
}