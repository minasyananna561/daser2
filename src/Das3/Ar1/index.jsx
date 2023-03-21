export let Ar1=()=>{
    let localState=[
        {   id:"1",
            description:"This is first image",
            url:"01.jpg",
        },
        {   id:"2",
        description:"This is last image",
            url:"02.jpg",
        },
     
      
    ]
    console.log(localState)
    return(
        <div style={{marginTop:"50px"}}>
  {localState.map((item)=>
        <div>
            <div><h6>Hello World! {item.description}: {item.url}</h6></div>
            <div></div>
        </div>
        )}
    
        </div>
    )
}
