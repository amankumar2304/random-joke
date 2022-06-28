// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("resposne",res);
// });

// .catch((e) =>{
//     console.log("error",e);
// });

const getstarwarperson = async (id) =>{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
};

// getstarwarperson(5);
// getstarwarperson(10);
const jokes= document.querySelector("#jokes");
const button=document.querySelector('button');

const addnewjoke =async() =>{
    const joketext= await dadjoke();
    console.log(joketext);
    const newli=document.createElement("LI");
    newli.append(joketext);
    jokes.append(newli);
}
button.addEventListener("click",addnewjoke);
const dadjoke= async () =>{
    try{
        const config = { headers: {Accept: 'application/json'}}
        const res= await axios.get('https://icanhazdadjoke.com/',config);
        // console.log(res.data.joke);
        return res.data.joke;
    }catch(e){
        return 'no jokes avail'
    }
    
}
// dadjoke();
