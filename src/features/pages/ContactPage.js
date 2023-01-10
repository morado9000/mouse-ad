const ContactPage = () => {
    return (
        <>
            <div className="container flex flex-col items-center px-6 mx-auto">
                <h1 className="font-bold text-4xl mt-6 mb-6">Contact Us</h1>

                <div className="flex flex-col justify-center mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../../img/chris._V1_.jpg")} style={{height: 200, width: 200}} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>John Smith</p>
                        <p>johnsmith@email.com</p>
                    </div> 
                </div>

                <div className="flex flex-col mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../../img/Anya_Taylor_Joy_headshot.jpg")} style={{height: 200, width: 200}} alt="" />
                    </div>  
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>Jane Richards</p>
                        <p>janerichards@email.com</p>
                    </div> 
                </div>

                <div className="flex flex-col mb-6 md:space-x-6 md:flex-row">
                    <div>
                        <img className="rounded-full" src={require("../../img/Charlie_Day_photo.jpg")} style={{height: 200, width: 200}} alt="" />
                    </div>  
                    <div className="flex flex-col items-center justify-center md:w-1/2">
                        <p>David Hayter</p>
                        <p>davidhayter@email.com</p>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ContactPage;