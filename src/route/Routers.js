import {Routes , Route ,Navigate} from 'react-router-dom';
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Videos from '../components/Categories/Videos'
import Leadeboard from '../components/Categories/Leadboard';
import Challenges from '../components/Categories/Challenges';

function Routers() {
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='videos' element={<Videos/>} />
        <Route path='leadboard' element={<Leadeboard/>} />
        <Route path='challenges' element={<Challenges/>} />
    </Routes>;
}

export default Routers;