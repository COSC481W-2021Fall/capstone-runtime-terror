import { useDispatch } from react-redux;
import { deletePost } from "../actions/posts";
<cardActions>
    <Button size = "small" color = "primary" onClick={() => dispatchEvent(deletePost(post._id))}>
    <deleteIcon fontSize="small" />
    Delete  
</Button>

</cardActions>
