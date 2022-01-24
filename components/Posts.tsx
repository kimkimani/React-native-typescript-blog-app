import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity} from "react-native";
import posts from '../lib/posts';
import {NavigationProp} from '@react-navigation/native';

interface Post{
    id:number;
    title:string;
    excerpt:string;
    content:string;
}

interface Props{
    navigation:NavigationProp<any>;
}

const Posts:React.FC<Props> = ({navigation}) => {
    return(
        <View>
            {/* <FlatList
                data={posts}
                renderItem={ ({item}) =>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Post',{post:item})}>
                        <View style={styles.postCard}>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            /> */}
            {
                posts.map((post:Post)=>{
                    return (
                        <View key={post.id} style={styles.postCard}> 
                            <Text style={styles.postTitle}>{post.title}</Text>
                            <Text style={styles.postExcerpt}>{post.excerpt}</Text>
                            <Button title="Read more" onPress={()=>navigation.navigate('Post',{post})}>Read More</Button>
                        </View>
                    )
            })}
        </View>
    )
}

export default Posts;

const styles = StyleSheet.create({
   postCard:{
       width:'100%',
       padding:10,
   },
   postTitle:{
       fontSize:18,
       fontWeight:'bold',
   },
   postExcerpt:{
       fontSize:15,
       color:'#666',
   }
});

