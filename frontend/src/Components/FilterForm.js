import Select from 'react-select/'
import { MidFlex } from './Styles/Flex'
import { FilterButton } from './Button'
import { useState, useEffect } from 'react'
import { FilterContainer } from './Styles/Container.styled'

const FilterForm = ({ monthsOptoins, currentDate, setCostsData, userIdentifier }) => {

  const [selectMonth, setSelectMonth] = useState(monthsOptoins[currentDate.getMonth() + 1]);
  const [selectYear, setSelectYear] = useState(currentDate.getFullYear());
  const [costsSum, setCostsSum] = useState("");


  useEffect(() => {
    getCosts();
  }, [])

  const getCosts = async () => {
    const costssFromServer = await fetchCostsFromDB();
    const data = costssFromServer[0];
    const sums = data != null ? costssFromServer[1].sum : null;
    setCostsData(data);
    setCostsSum(sums);
  }

  const fetchCostsFromDB = async () => {
    const url = "http://localhost:5000/costs/userid/"+ userIdentifier + "/year/" + selectYear + "/month/" + selectMonth;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }



  const createMonthsSelectOptions = () => {
    let options = [];
    monthsOptoins.forEach(month => { options.push({ value: month, label: month }); });
    return options;
  }

  function generateSelectYears() {
    let currentYear = currentDate.getFullYear();
    let lastYearToAdd = currentYear - 9;
    let yearsArray = [];

    for (var i = currentYear; i >= lastYearToAdd; i--) {
      yearsArray.push({ label: i, value: i })
    }

    return yearsArray
  }

  const monthsSelectOptions = createMonthsSelectOptions();
  const yearsArray = generateSelectYears();


  return (
    <FilterContainer>
      <MidFlex>
        <div>
          <label>Year</label>
          <Select
            options={yearsArray}
            defaultValue={{ label: selectYear.toString(), value: selectYear }}
            onChange={(e) => setSelectYear(e.value)}
          ></Select>
        </div>
        <div>
          <label>Month</label>
          <Select
            options={monthsSelectOptions}
            defaultValue={{ label: selectMonth, value: selectMonth }}
            onChange={(e) => setSelectMonth(e.value)}
          ></Select>
        </div>
      </MidFlex>
      <FilterButton
        text={"Double click to filter"}
        onClick={() => getCosts()}//; window.location.reload();
      ></FilterButton>
      <h3> Costs Sum : {costsSum}$</h3>
    </FilterContainer>
  )
}

export default FilterForm