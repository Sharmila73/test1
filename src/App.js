import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Binding from './components/BindingEventHandler';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/ListRendering';
import Styles from './components/Stylesheet';
import './appStyles.css'
import styles from './appStyles.module.css'
import Inline from './components/Inline';
import ReactForm from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragementDemo';
import Table from './components/Table';
import Ref from './components/Ref';
import Hero from './components/Heri';
import ErrorBoundary from './components/ErrorBoundary';
import HookCounter from './components/useState';
import HookCounterOne from './components/HookuseEffect';
import DataFetching from './components/useEffectDataFetching';
import CounterOne from './components/useReducer';
import Parent from './components/Parent';
import Counter1 from './components/useMemo';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/*<Greet name='sharmila' alias='ammu'>
        <p>This is children props</p>
      </Greet>
      <Greet name='shiyamla' alias='shiyam'>
        <button>Action</button>
      </Greet>
      <Greet name='ganapathi' alias='appu'/>
      <Welcome name='sharmila' alias='ammu'/>
      <Welcome name='shiyamla' alias='shiyam'/>
      <Welcome name='ganapathi' alias='appu'/>
      <Hello/>
  <Message/>*/}
  {/* <Greet name='ganapathi' alias='appu'/>
  <Welcome name='shiyamla' alias='shiyam'/>
  <Message/>

  <Counter/>
  <FunctionClick/>
  <ClassClick/>
  <Binding/>
  <ParentComponent/>
  <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Styles primary={true}/>
      <Inline/> */}
       <ReactForm/> 
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <Ref/> */}
      {/* <ErrorBoundary>
      <Hero heroName="vijay"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="vjd"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="joker"/> 
      </ErrorBoundary> */}
      {/* <HookCounter/> */}
      {/* <HookCounterOne/> */}
      {/* <DataFetching/> */}
      {/* <CounterOne/> */}
      {/* <Parent/> */}
      {/* <Counter1/> */}
    </div>
  );
}

export default App;
