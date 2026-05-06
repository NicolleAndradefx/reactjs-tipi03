import './App.css'

// 1 - importando primeiro componente
import PrimeiroComponente from './componentes/PrimeiroComponente';

// 2 - importanto template expressioms
import TemplateExpressions from './componentes/TemplateExpressions';

// 3 - importando hierarquia de componente
import HierarquiaComponente from './componentes/HierarquiaComponente';
import EventoClick from './componentes/EventoClick';

// 4 - importando Evento click

function App() {
  return(
  <div className="App">
    <h1>Fundamentos do React</h1>
    {/* 1- importando primeiro componente */}
    <PrimeiroComponente />
    {/* 2 - importando segundo componente */}
    <TemplateExpressions />
    {/* 3 - importando terceiro componente */}
    <HierarquiaComponente />
    {/* 4 - importando quarto componente */}
    <EventoClick />
  </div>
  );
};


export default App;