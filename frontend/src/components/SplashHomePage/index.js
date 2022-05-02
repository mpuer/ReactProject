import "./splashhome.css"

const SplashPage = () => {
    return (
        <div className="splash-main-container">
            <div className="splash-first-container">
                <div className="first-container-banner">Find your destination.
                <div className="first-container-inner-text">signup or login to start</div></div>
            </div>
            <div className="splash-second-container">
                <div className="second-container-title">Inspiration for your next trip
                </div>
                <div className="pictures-container">

                <div className="second-container-image-one">a forest retreat</div>
                <div className="second-container-image-two">a houseboat getaway</div>
                </div>
            </div>
            <div className="splash-third-container">
                <div className="destinations-text">Destinations coming soon</div>
                <div className="destination-images-container">
                    <div className="destination">
                        <img alt='' src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg?im_w=240" className="dest-image"></img>
                        <div className="dest-image-text">Copenhagen</div>
                    </div>
                    <div className="destination">
                        <img alt='' src="https://a0.muscache.com/im/pictures/df72828e-714f-4a68-8211-ca005ef5664a.jpg?im_w=240" className="dest-image"></img>
                        <div className="dest-image-text">Miami</div>
                    </div>
                    <div className="destination">
                        <img alt='' src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=240" className="dest-image"></img>
                        <div className="dest-image-text">Hawaii</div>
                    </div>
                    <div className="destination">
                        <img alt='' src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=240" className="dest-image"></img>
                        <div className="dest-image-text">Rio de Janeiro</div>
                    </div>
                </div>
            </div>
            <div className="splash-forth-container"></div>

        </div>
        // <FooterNav/>
    )
}

export default SplashPage;
