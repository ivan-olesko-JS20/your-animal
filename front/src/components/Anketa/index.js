import React,{useState} from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  startAnimals,
  setAnimalCategory,
  paymentFilter,
  ageFilter,
  priceFilter,
  genderFilter,
  hairFilter,
  weightFilter,
  warFilter,
  guideFilter,
  sufferFilter,
  conditionFilter,
  apartmentFilter,
  childrenFilter
} from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




export default function Anketa(){
  const data = useSelector(state => state.animals).animals;
  const [active, setActive] = useState(true)
  const filters = useSelector((state) => state.animals.filters)
  const animalsFromState = useSelector((state) => state.animals.animals)

  const [visible, setVisible] = useState(false)

  let category = animalsFromState[filters.category]

  const dispatch = useDispatch()


  function handleActive(e) {
    const key = e.target.value
    switch (key) {
      case 'dogs':
        dispatch(setAnimalCategory(key))
        break;
      case 'cats':
        dispatch(setAnimalCategory(key))
        break;
      case 'otheranimals':
        dispatch(setAnimalCategory('other'))
        break;
      case 'female':
        dispatch(genderFilter(key))
        break;
      case 'male':
        dispatch(genderFilter(key))
        break;
      case '0-10':
        dispatch(weightFilter(key))
        break;
      case '10-25':
        dispatch(weightFilter(key))
        break;
      case '25-50':
        dispatch(weightFilter(key))
        break;
      case '0-1':
        dispatch(ageFilter(key))
        break;
      case '3-7':
        dispatch(ageFilter(key))
        break;
      case 'дом':
        dispatch(apartmentFilter(false))
        break;
      case 'специальные условия':
        dispatch(apartmentFilter(false))
        break;
      case 'квартира':
        dispatch(apartmentFilter(true))
        break;
      case 'есть':
        dispatch(sufferFilter(true))
        break;
      case 'нет':
        dispatch(sufferFilter(false))
        break;
    
      default:
        break;
    }

    
  }

  function handleSubmit() {
    
    setVisible(!visible)
  }
  function handleAnketa() {
    
    setVisible(!visible)
  }

    return (
      <>
        <Button type="primary" style={{display: visible ? 'none' :'inline' }} onClick={handleAnketa}>
        XXX
        </Button>
        <div className='container-form' style={{display: visible ? 'block' : 'none'}}>
            <div className='text-box'>
              <div>Каое животное ты ищешь?</div>
            <div className='img-div'>
              <div>
                  <label for='1'>
                  <input className='radio' style={{visibility: 'hidden'}} id='1' value='dogs' onClick={handleActive} name='1' type='radio'/>
                  <img className='img-anceta' src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>собака</div>
                  </label>
              </div>
              <div>
                  <label for='2'>
                  <input className="radio" style={{visibility: 'hidden'}} id='2' name='1' value='cats' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>кошка</div>
                  </label>
              </div>
              <div>
                  <label for='3'>
                  <input className="radio" style={{visibility: 'hidden'}} id='3' name='1' value='otheranimals' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>другое</div>
                  </label>
              </div>
            </div>

            {/* <div>хочешь ли ты, чтобы животное было экзотическое?</div>
            <div className='img-div'>
              <div>
                  <label for='4'>
                  <input className='radio' style={{visibility: 'hidden'}} id='4' value='dog' onClick={handleActive} name='2' type='radio'/>
                  <img className={active? 'img-anceta' : 'img-anceta active'}  src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>экзотическое</div>
                  </label>
                </div>
                <div>
                  <label for='5'>
                  <input className='radio' style={{visibility: 'hidden'}} id='5' name='2' value='cat' onClick={handleActive} type='radio'/>
                  <img className={active? 'img-anceta' : 'img-anceta active'}   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>не экзотическое</div>
                  </label>
              </div>
            </div> */}

            <div>ты возьмешь маленького или взрослого питомца</div>
            <div className='img-div'>
              <div>
                  <label for='4'>
                  <input className='radio' style={{visibility: 'hidden'}} id='4' value='0-1' onClick={handleActive} name='3' type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>маленького</div>
                  </label>
                </div>
                <div>
                  <label for='5'>
                  <input className='radio' style={{visibility: 'hidden'}} id='5' name='3' value='3-7' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>взрослого</div>
                  </label>
              </div>
            </div>

            <div>Пол животного</div>
            <div className='img-div'>
              <div>
                  <label for='7'>
                  <input className='radio' style={{visibility: 'hidden'}} id='7' value='female' onClick={handleActive} name='4' type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>самка</div>
                  </label>
                </div>
                <div>
                  <label for='8'>
                  <input className='radio' style={{visibility: 'hidden'}} id='8' name='4' value='male' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>самец</div>
                  </label>
              </div>
            </div>

            <div>где будет жить питомец</div>
            <div className='img-div'>
              <div>
                  <label for='9'>
                  <input className='radio' style={{visibility: 'hidden'}} id='9' value='квартира' onClick={handleActive} name='5' type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>квартира</div>
                  </label>
                </div>
                <div>
                  <label for='10'>
                  <input className='radio' style={{visibility: 'hidden'}} id='10' name='5' value='дом' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>дом</div>
                  </label>
              </div>
                <div>
                  <label for='11'>
                  <input className='radio' style={{visibility: 'hidden'}} id='11' name='5' value='специальные условия' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'    src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>специальные условия</div>
                  </label>
              </div>
            </div>
            <div>Какого размера будет животное когда вырастет</div>
            <div className='img-div'>
              <div>
                  <label for='12'>
                  <input className='radio' style={{visibility: 'hidden'}} id='12' value='0-10' onClick={handleActive} name='5' type='radio'/>
                  <img className='img-anceta'  src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>маленькое</div>
                  </label>
                </div>
                <div>
                  <label for='13'>
                  <input className='radio' style={{visibility: 'hidden'}} id='13' name='5' value='10-25' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>среднее</div>
                  </label>
              </div>
                <div>
                  <label for='14'>
                  <input className='radio' style={{visibility: 'hidden'}} id='14' name='5' value='25-50' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>большое</div>
                  </label>
              </div>
            </div>
            <div>Есть ли у тебя или членов твоей семьи аллергия на животных</div>
            <div className='img-div'>
              <div>
                  <label for='15'>
                  <input className='radio' style={{visibility: 'hidden'}} id='15' value='есть' onClick={handleActive} name='5' type='radio'/>
                  <img className='img-anceta'  src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>есть</div>
                  </label>
                </div>
                <div>
                  <label for='16'>
                  <input className='radio' style={{visibility: 'hidden'}} id='16' name='5' value='нет' onClick={handleActive} type='radio'/>
                  <img className='img-anceta'   src='http://img1.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg' />
                  <div>нет</div>
                  </label>
              </div>
            </div>
            
            <div className='form-button'>
               <Button variant="outlined" onClick={handleSubmit} color="inherit">Подобрать</Button> 
            </div>
            
            </div>

        </div>
        </>
    )
}