import { NextApiRequest, NextApiResponse } from "next";

// Endpoint para el login.
export async function userValidation(email: string, password: string) {
    const localToken = 'sR5sFsv4fhl2524sd5dds';
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('localToken', localToken);

    try {
        const res = await fetch('https://edercmf.com/API/Login.php', {
            method: 'POST',
            body: formData,
        })
        const response = await res.json();
        //console.log(response);
        switch (response.CODE) {
            case 1:
                throw new Error('Token inválido');
                console.log('Token inválido');
                break;
            case 2:
                console.log('Datos del usuario:', response);
                return response;
                break;
            case 3:
                throw new Error('Usuario o contraseña incorrectos');
                console.log('Usuario o contraseña incorrectos');
                break;
            default:
                throw new Error('Error desconocido');
                console.log('Error desconocido');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        console.log("Error al enviar la solicitud");
        //throw new Error('Error al enviar la solicitud');
    }
};

// endpoint para traer la informacion de la api y mostrarla en las tablas.
export async function fetchingGet(url: string) {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const response = await res.json();
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        console.log("Error al enviar la solicitud");
    }
}

// endpoint para modificar la informacion de las tablas de códigos promocionales y subirla a la api.
export async function updateCodes(
    codeId: string,
    code: string,
    points: number,
    expirationDate: string,
    notes: string) {
    const formData = new FormData();
    formData.append('codeId', codeId);
    formData.append('code', code);
    formData.append('points', points.toString());
    formData.append('expirationDate', expirationDate);
    formData.append('notes', notes);
    
    try {
        const res = await fetch('https://edercmf.com/API/UpdateCodes.php', {
            method: 'POST',
            body: formData,
        })
        const response = await res.json();
        switch (response.CODE) {
            case 1:
                return "OK";
                break;
            case 2:
                console.log('Faltan Datos: ', response);
                return response;
            case 3:
                console.log('Ocurrio un error: ', response);
                return response;
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        console.log("Error al enviar la solicitud");
    }
};

// endpoint para modificar la informacion de las tablas de retiros y subirla a la api.
export async function updateUsers(
    userId: string,
    code: string,
    fecha: string,
    lastDate: string,
    email: string,
    country: string,
    points: number,
    numberW: number,
    ads: number,
    videoads: number,
    userStateId: number) {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('code', code);
    formData.append('fecha', fecha);
    formData.append('lastDate', lastDate);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('points', points.toString());
    formData.append('numberW', numberW.toString());
    formData.append('ads', ads.toString());
    formData.append('videoads', videoads.toString());
    formData.append('userStateId', userStateId.toString());
    
    try {
        const res = await fetch('https://edercmf.com/API/UpdateUser.php', {
            method: 'POST',
            body: formData,
        })
        const response = await res.json();
        switch (response.CODE) {
            case 1:
                return "OK";
                break;
            case 2:
                console.log('Faltan Datos: ', response);
                return response;
            case 3:
                console.log('Ocurrio un error: ', response);
                return response;
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        console.log("Error al enviar la solicitud");
    }
};

export async function updateRetiros(
    withdrawalsId: string,
    userId: string,
    fecha: string,
    selectedCoin: string,
    status: string,
    ip: string,
    email: string,
    withdrawalEmail: string,
    points: number,
    coins: string,
    usd: string,
    usdPrice: string,
    SatoshiSend: string,
    conversion: string,
    withdrawalNumber: number,
    videoAdsSum: number,
    WalletName: string,
    note: string,
    note2: string) {
    const formData = new FormData();
    formData.append('withdrawalsId', withdrawalsId);
    formData.append('userId', userId);
    formData.append('fecha', fecha);
    formData.append('selectedCoin', selectedCoin);
    formData.append('status', status);
    formData.append('ip', ip);
    formData.append('email', email);
    formData.append('withdrawalEmail', withdrawalEmail);
    formData.append('points', points.toString());
    formData.append('coins', coins);
    formData.append('usd', usd);
    formData.append('usdPrice', usdPrice);
    formData.append('SatoshiSend', SatoshiSend);
    formData.append('conversion', conversion);
    formData.append('withdrawalNumber', withdrawalNumber.toString());
    formData.append('videoAdsSum', videoAdsSum.toString());
    formData.append('WalletName', WalletName);
    formData.append('note', note);
    formData.append('note2', note2);

    
    try {
        const res = await fetch('https://edercmf.com/API/UpdateRetiro.php', {
            method: 'POST',
            body: formData,
        })
        const response = await res.json();
        switch (response.CODE) {
            case 1:
                return "OK";
                break;
            case 2:
                console.log('Faltan Datos: ', response);
                return response;
            case 3:
                console.log('Ocurrio un error: ', response);
                return response;
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        console.log("Error al enviar la solicitud");
    }
};