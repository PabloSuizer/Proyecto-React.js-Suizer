const Footer = () => {
    return (
        <div className="container-fluid bg-primary text-light fixed-bottom ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p>Copyright &copy; 2023. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-sm-6 text-white">
                        <a href="https://www.facebook.com/tupaginaweb" className="link-light">Facebook</a> |
                        <a href="https://www.twitter.com/tupaginaweb" className="link-light">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

