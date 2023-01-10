const ListPage = () => {
    return (
        <>
            <div className="container flex flex-col items-center justify-center px-6 mx-auto">
                <div className="mb-6 mt-6 md:w-1/2">
                    <img src={require("../../img/computer-mouse-1-1242178.jpg")} alt="" />
                </div>

                <div className="mb-6 md:w-1/2">
                    <img src={require("../../img/210709075133-best-computer-mouse-master.jpg")} alt="" />
                </div>

                <div className="mb-6 md:w-1/2">
                    <img src={require("../../img/istockphoto-1145791506-612x612.jpg")} alt="" />
                </div>
                
                <div className="mb-6 md:w-1/2">
                    <img src={require("../../img/North-1080x675.jpg")} alt="" />
                </div>

                <div className="mb-6 md:w-1/2">
                    <img src={require("../../img/IMG_2009.jpg")} alt="" />
                </div>

            </div>
        </>
    )
}

export default ListPage;