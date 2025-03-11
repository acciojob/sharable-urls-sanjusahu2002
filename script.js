// your code here
        let name = document.getElementById('name');
        let year = document.getElementById('year');
        let url = document.getElementById('url');
        let button = document.getElementById('button');

        button.addEventListener('click',()=>{
            url.innerText = "https://localhost:8080/";
            let nameValue = name.value;
            let yearValue = year.value;
            
            if(nameValue.length != 0 && yearValue.length !=0){
                url.innerText += `?name=${nameValue}&year=${yearValue}`;
            }
            else if(nameValue.length != 0 && yearValue.length ==0){
                url.innerText += `?name=${nameValue}`;
            }
            else{
                url.innerText += `?year=${yearValue}`;
            }
        });