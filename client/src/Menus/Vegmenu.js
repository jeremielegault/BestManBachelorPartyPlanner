import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../components/Reducers/FormContext";

// If the user has selected "Vegan" or "Vegetarian" for the dietary restrictions, this will render a menu based on the number of guests and duration of a party. The menu is vegan for simplicity's sake, because all that is vegan is vegetarian, but not all that is vegetarian is vegan.

const Vegmenu = () => {
  const formContext = useContext(FormContext);

  const num = formContext.state.numGuests;

  // Typically bachelor parties start in the evening, so you need one less breakfast than other meals.
  const breakNum = formContext.state.duration - 1;

  const length = formContext.state.duration;

  return (
    <Wrapper>
      <h1>DIY Vegan Menu</h1>
      <p>
        Choosing to cook for yourselves can be a great way to cut down on costs!
      </p>
      {/* Is it for more than one evening? */}
      {length > 1 ? (
        <>
          <EachMealWrapper>
            <Subtitles>Dinner 1:</Subtitles>
            <li>{num * 1} soy burgers and vegan buns</li>
            <li>{num * 1} soy dogs and vegan buns</li>
            <li>{Math.ceil(num * 0.33)} green salad mix</li>
            <li>
              {Math.ceil(num * 0.2)} bottle(s) each (ketchup, mustard, relish,
              mayo)
            </li>
            <li>{Math.ceil(num * 0.1)} bottle(s) of salad dressing</li>
          </EachMealWrapper>
          <EachMealWrapper>
            <Subtitles>Lunch 1:</Subtitles>
            <li>{Math.ceil(num * 2)} tortillas</li>
            <li>{Math.ceil(num * 0.375)} lbs black beans</li>
            <li>{Math.ceil(num * 0.375)} pack(s) of taco seasoning</li>
            <li>{Math.ceil(num * 2)} avocado(s)</li>
            <li>{Math.ceil(num * 0.25)} jar(s) of salsa</li>
            <li>{Math.ceil(num * 50)}g of vegan cheese</li>
            <li>{Math.ceil(num * 0.33)} green salad mix</li>
          </EachMealWrapper>
          <EachMealWrapper>
            <Subtitles>Dinner 2:</Subtitles>
            <li>{Math.ceil(num * 0.5)} lbs jackfruit</li>
            <li>{num * 1} vegan hamburger buns</li>
            <li>{Math.ceil(num * 50)}g of shredded coleslaw</li>
            <li>{Math.ceil(num * 0.5)} lbs of potatoes</li>
            <li>{Math.ceil(num / 16)} pound(s) of margarine</li>
          </EachMealWrapper>
          <EachMealWrapper>
            <Subtitles>Breakfast Groceries:</Subtitles>
            <p>Calculated based on duration of party</p>
            <li>{Math.ceil(breakNum * (num * 1))} english muffins</li>
            <li>{Math.ceil(breakNum * (num * 0.25))} lb(s) of bananas</li>
            <li>
              {Math.ceil(breakNum * (num * 0.125))} jars(s) of peanut butter
            </li>
            <li>{Math.ceil(breakNum * (num * 0.025))} kilo(s) of coffee</li>
            <li>{Math.ceil(breakNum * (num / 4))} liter(s) of Oat Milk</li>
            <li>{Math.ceil(breakNum * (num / 16))} pound(s) of margarine</li>
          </EachMealWrapper>
          <EachMealWrapper>
            <Subtitles>Snacks:</Subtitles>
            <li>{Math.ceil(breakNum * (num * 0.5))} bag(s) of chips</li>
            <li>{Math.ceil(breakNum * (num * 0.15))} bag(s) of baby carrots</li>
            <li>{Math.ceil(breakNum * (num * 0.15))} head(s) of celery</li>
            <li>{Math.ceil(breakNum * (num * 0.4))} container(s) of hummus</li>
          </EachMealWrapper>
        </>
      ) : (
        // The party is a single evening
        <>
          <EachMealWrapper>
            <Subtitles>Dinner:</Subtitles>
            <li>{num * 1} soy burgers and vegan buns</li>
            <li>{num * 1} soy dogs and vegan buns</li>
            <li>{Math.ceil(num * 0.33)} green salad mix</li>
            <li>
              {Math.ceil(num * 0.2)} bottle(s) each (ketchup, mustard, relish,
              mayo)
            </li>
            <li>{Math.ceil(num * 0.1)} bottle(s) of salad dressing</li>
          </EachMealWrapper>
          <EachMealWrapper>
            <Subtitles>Snacks:</Subtitles>
            <li>{Math.ceil(num * 0.5)} bag(s) of chips</li>
            <li>{Math.ceil(num * 0.15)} bag(s) of baby carrots</li>
            <li>{Math.ceil(num * 0.15)} head(s) of celery</li>
            <li>{Math.ceil(num * 0.4)} container(s) of hummus</li>
          </EachMealWrapper>
        </>
      )}
      <Link to="/results">
        <Button>Back to Results</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: #bee0ed;
`;

const Subtitles = styled.h2`
  font-weight: bold;
`;
const EachMealWrapper = styled.div`
  background-color: #87a1c6;
  color: white;
  border-radius: 5px;
  padding: 3px 0 15px 0;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px;
  width: 300px;
`;

const Button = styled.button`
  height: 45px;
  width: 120px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  padding: 3px 0 3px 0;
  margin: 3px 0 3px 0;
`;

export default Vegmenu;
