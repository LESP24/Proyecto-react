
import Formulario from './omponents/Formulario';
import ListaEstudiantes from './Components/ListaEstudiantes';

const App = () => {
  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario />
        <ListaEstudiantes />
      </div>
    </div>
  );
};

export default App;
