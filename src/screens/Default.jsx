
import { useSelector } from "react-redux";
import FilterableProductTable from './_components/FilterProductTable';

const Default = () => {
    const defaultState = useSelector(state => state.default);
    console.log(defaultState);

    return (
        <>
            <header className="App-header">                
                <FilterableProductTable products={defaultState}/>
            </header>
        </>
    );
};

export default Default;