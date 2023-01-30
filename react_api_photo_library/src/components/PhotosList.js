import PhotosListItem from "./PhotosListItem";
import {useGetPhotosQuery, usePostPhotoMutation} from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList({album}) {
    const {data, error, isFetching} =  useGetPhotosQuery(album);
    const [addPhoto, result] = usePostPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" instances={4} />
    } else if (error) {
        content = <div>Error loading photos</div>
    } else {
        content = data.map((photo) => {
           return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg">{album.title} album art</h3>
                <Button loading={result.isLoading} onClick={handleAddPhoto}>
                    Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
}

export default PhotosList;