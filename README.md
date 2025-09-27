# hw28-react-recipe-form
Build a comprehensive recipe submission form that allows users to create, edit, and submit detailed recipes. This assignment will test your understanding of controlled components, form validation, dynamic form fields, and complex state management in React.

## Learning Objectives:

-   Master controlled component patterns
-   Implement comprehensive form validation
-   Handle complex form state with multiple input types
-   Create dynamic form fields for ingredients and instructions
-   Apply form submission best practices
-   Build a user-friendly form interface

## Requirements

### Functional Requirements

#### Core Form Fields

-   **Recipe Title** (required, 3-50 characters)
-   **Description** (required, 10-500 characters)
-   **Servings** (required, numeric, 1-20)
-   **Difficulty Level** (required, dropdown: Easy, Medium, Hard)
-   **Category** (required, dropdown: Appetizer, Main Course, Dessert, Side Dish, Beverage)
-   **Cuisine Type** (required, dropdown: American, Italian, Mexican, Asian, Mediterranean, Other)

#### Dynamic Ingredients Section

-   **Add/Remove Ingredients:** Users can add multiple ingredients
-   **Each ingredient should have:**
    -   Name (required, 2-50 characters)
    -   Quantity (required, numeric, 0.1-1000)
    -   Unit (required, dropdown: cups, tablespoons, teaspoons, ounces, pounds, grams, pieces, etc.)

#### Image Upload

-   **Recipe Image:** Use image URL

#### Form Validation

-   **Real-time validation** for all fields as user types
-   **Submit-time validation** to ensure all required fields are complete

#### Form Submission

-   **Success message** with recipe summary *(Show a card of the recipe)*
-   **Form reset** after successful submission
-   **Error handling** for submission failures

### Technical Requirements

#### React Implementation

-   Use functional components with hooks (useState, useEffect)
-   Implement controlled components for all form inputs
-   Use object state for form data management
-   Implement proper event handling patterns
-   Use functional state updates to avoid stale closures

#### File Organization

-   Single component file for the form
-   Separate CSS file for styling
-   Proper import/export statements
-   Clean, maintainable code structure

## Getting Started

### Setup Instructions

1.  Create a new React component called RecipeSubmissionForm
2.  Set up the basic component structure with useState hooks
3.  Create the form JSX structure with all required fields
4.  Implement the validation logic
5.  Add the submission handling
6.  Style the form for better user experience

### File Structure

```txt
src/
├──  components/
│  ├──  RecipeSubmissionForm.jsx
│  └──  RecipeSubmissionForm.css
├──  utils/
│  └──  validation.js  (optional)
└──  App.jsx
```
## Implementation Guide

### Suggested Approach

1.  **Start with State Management:** Set up all necessary state variables for form data, errors, and UI states
2.  **Build Basic Form Structure:** Create the form JSX with all required fields
3.  **Implement Validation:** Add real-time and submit-time validation logic
4.  **Add Dynamic Fields:** Implement add/remove functionality for ingredients and instructions
5.  **Handle Form Submission:** Add loading states, success messages, and error handling
6.  **Style the Form:** Create a professional, user-friendly interface

### Key Implementation Notes

-   Use controlled components for all form inputs
-   Implement proper state management with functional updates
-   Add comprehensive validation for all fields
-   Handle dynamic arrays for ingredients and instructions
-   Include file upload functionality with validation
-   Provide clear user feedback and error messages

## Resources

### Helpful Documentation

-   [React Forms Documentation](https://reactjs.org/docs/forms.html)
-   [File Upload in React](https://reactjs.org/docs/forms.html#the-file-input-tag)
-   [Form Validation Patterns](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

### Code Examples

-   Controlled component patterns
-   Dynamic form field management
-   Form validation techniques

### Troubleshooting Guide

-   **Form not submitting:** Check preventDefault() and validation
-   **Dynamic fields not working:** Verify array state updates hintL use the spread operator
-   **File upload issues:** Check file input handling
-   **Validation not working:** Ensure validation functions are properly connected

### Extension Ideas

-   Form persistence with localStorage
-   Drag-and-drop image upload
-   Recipe preview before submission
-   Form auto-save functionality
-   Advanced validation with custom rules