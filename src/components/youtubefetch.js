import { useEffect, useState } from "react";
import "./index.css";

const API = "AIzaSyAN4sreqxLX54XTxvvVQTghUMI1Gz7lCYw";
const channelId = "UCAuUUnT6oDeKwE6v1NGQxug";

const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

const Youtube = () => {

    const [all,setAll] = useState([]);

    useEffect(() => {
        fetch(fetchUrl).then((response) => response.json()).then((res) => {
            const result = res.items.map(doc => ({
                ...doc,
                VideoLink : "https://www.youtube.com/embed/"+doc.id.videoId
            }));
            setAll(result)
        })
    },[])

    console.log(all);

    return (
        <div className="whole">
            <div className="heading">
                <h1>Youtube Fetcher ~ Shakiv</h1>
                <h2>Channel - TEDx</h2>
            </div>
            <div className="individualwhole">
                {all.map((item, index) => {
                    return (
                        <div key={index} className="individual">
                            <iframe width="500" height="315" src={item.VideoLink} title="Youtube Video Player" allowFullScreen></iframe>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Youtube;