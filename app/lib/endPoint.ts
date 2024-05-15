
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
        console.log(response);
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
