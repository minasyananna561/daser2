import { Link } from 'react-router-dom'
import './index.css'
export let Navbar=()=>{
    return(
        <nav className="nav">
            <Link to="/" className="sitetitle">Logo</Link>
<ul>
    <li className="active">
        <Link to='/page1'>Page1</Link>
        </li>
        <li>
        <Link to='/page2'>Page2</Link>
    </li>
    <li>
        <Link to='/page3'>Page3</Link>
    </li>
    <li>
        <Link to='/page4'>Page4</Link>
    </li>
    <li>
        <Link to='/page5'>Page5</Link>
    </li>
    <li>
        <Link to='/page6'>Page6</Link>
    </li>
    <li>
        <Link to='/page7'>Page7</Link>
    </li>
    <li>
        <Link to='/page8'>Page8</Link>
    </li>
    <li>
        <Link to='/page9'>Page9</Link>
    </li>
    <li>
        <Link to='/page10'>Page10</Link>
    </li>
    <li>
        <Link to='/page11'>Page11</Link>
    </li>
    <li>
        <Link to='/page12'>Page12</Link>
    </li>


</ul>
        </nav>
    )
}