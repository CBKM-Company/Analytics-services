url = "https://cbkm-analytics-services.herokuapp.com"

function register() {
    data = {
        appName: document.getElementById("appName").value
    }
    axios.post(`${url}/user/register`, data)
        .then(res => {
            console.log(res.data)
            if (res.data.success) {
                document.getElementById('info').innerHTML = `
            Your App ID :- ${res.data.user.appID}<br>
            Please Save it !!
            `
            }
            else {
                document.getElementById('info').innerHTML = `
            Please use diffrent App ID<br>
             ${data.appName} Alreay exists<br>

            Try again it !!
            `
            }
        })
    console.log(data)
}