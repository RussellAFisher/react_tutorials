import {useGetAlbumsQuery, usePostAlbumMutation} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({user}) {
    const {data, error, isLoading} = useGetAlbumsQuery(user);
    const [addAlbum, results] = usePostAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton className="h-10 w-full" instances={3}/>
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album}/>
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Favorite albums for {user.name}:</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    Add Album
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
}

export default AlbumsList;