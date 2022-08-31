/*
export const Wrapper  = () => {
    return <user city="minsk" />

}
type PropsType = {
    city: string
}
export const user: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}*/
/*
import ReactDOM from 'react-dom'

export const YoutubeVideo = () => {
    return <div>
        <VideoHeader />
        <VideoContent />
        <VideoStatistics />
    </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div>ххх</div>,
    document.getElementById('root')
);

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода*/
/*
type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Имя: {props.name}</h1>
        //<div>Описание: {ххх}</div>
    </div>
}
*/

//Что нужно написать вместо ххх, что бы код работал?
/*

type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}

export const Wrapper1 = () => {
    return <PropsComponent1 city='minsk' country={""} coords={""}/>
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки*/


/*
type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}
const Page: React.FC<PagePropsType> = (props) => {
    return <User a={12} n={"yyy"} />
}
type UserPropsType = {
    a: number
    n: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}

// Что нужно написать вместо xxx и yyy?
// Ответ дайте через пробел, например: blabla onClick(props)*/


/*
type NewsType = {
    title: string
    author: string
}
type ArticleType = {
    title: string
    date: string
    text: string
}
type PagePropsType = {
    news: NewsType[]
    mainArticle: ArticleType
}
export const Page: React.FC<PagePropsType> = (props) => {
    return <div>
        <article>
            <h1>Название: {props.mainArticle.title}</h1>
            <div>{props.mainArticle.date}</div>
            <div>{props.mainArticle.text}</div>
        </article>
        <aside>Articles:
            <ul>
                {props.news.map(n => <li>{n.title}, {n.author}</li>)}
            </ul>
        </aside>
    </div>
}*/


/*
type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100}
    ]

    return <div>
        <UserWallet wallet={wallets[0]} />
        <UserWallet wallet={yyy} />
    </div>
}*/


/*
import ReactDOM from 'react-dom'

export const VideoHeader = (props: {videoName: string}) => {
    return <div>
        😀 {props.videoName}
    </div>
}
export const VideoContent = (props: {videoContent: string}) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription = (props: {videoDescription: string}) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const YoutubeVideo = (props: any) => {
    return <div>
        <VideoHeader xxx />
        <VideoContent yyy />
        <VideoDescription zzz />
    </div>
}

export const App = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course'
    }

    return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);*/



/*

import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

    const style = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

    return <button style={style}>
        {props.style}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)*/
