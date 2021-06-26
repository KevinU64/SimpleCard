import Frame from './components/Frame';
import './global.css'

export default function App(){
  return(
    <div className='contenedor_frames'>
      {
        <Frame />
      }
    </div>
  )
}
