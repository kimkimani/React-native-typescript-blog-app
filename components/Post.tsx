import {Text,View} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface PostItem {
    id:number;
    title:string;
    excerpt:string;
    content:string;
}

type Post =  {
    PostDetails:PostItem
}

type Props  ={
    route: NativeStackScreenProps<Post,'PostDetails'>
}

const Post:React.FC<Props>= ({route}) =>  {
    const post:PostItem = route.params.post;
    return(
        <View>
            <Text>{post.title}</Text>
            <Text>{post.excerpt}</Text>
            <Text>{post.content}</Text>
        </View>
    )
}

export default Post;