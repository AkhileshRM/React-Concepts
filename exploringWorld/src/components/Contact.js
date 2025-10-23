const Contact = () => {
    return(
        <>
        <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us Page</h1>
        <form className="">
            <input type="text" className="border-black border-2 p-2 m-2" placeholder="name"/>
             <input type="text" className="border-black border-2 p-2 m-2" placeholder="message"/>
             <button className="border-black border-2 p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
        </>
    )
}

export default Contact