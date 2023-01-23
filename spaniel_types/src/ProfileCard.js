function ProfileCard({title, description, image}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by2">
                    <img src={image} alt={description}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">This is {title}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;