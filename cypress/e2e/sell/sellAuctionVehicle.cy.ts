import { login } from "../../utils/login";

describe("happy scenario to sell Auction vehicle", () => {


    const selectOption = (placeholder: string, value: any) => {
        cy.get(`input[placeholder="${placeholder}"]`).click();

        cy.get(`input[placeholder="${placeholder}"]`).type(value);

        cy.contains(value).eq(0).click();
    }
    

    const typeToInput = (placeholder: string, value: any) => {
        cy.get(`[placeholder="${placeholder}"]`).click();

        cy.get(`[placeholder="${placeholder}"]`).type(value);
   }

    
    it("login to Can Sell", () => {
        cy.viewport(1400, 1000)

        login(false);

        cy.get("[data-cy='sell_now_button']").click();

        cy.get("[data-cy='sell_product_button']").eq(0).click();

        cy.get("[data-cy='sell_item_button']").eq(1).click();   

        cy.wait(1000);

        selectOption("Please select brand", "BMW");

        selectOption("Please select year", "2013");
    
        cy.wait(2000);

        selectOption("Please select model", "116i");

        typeToInput("Mileage in kilometers", "514");


        typeToInput("Price", "5000000");


        cy.get("[data-cy='next_Button']").click()

        selectOption("Please select city", "Damietta");

        selectOption("Please select area", "Damietta");


        cy.wait(1000);

        selectOption("Please Select Center", "New Damiet");

        cy.get("[data-cy='select_date_and_time']").click()

        cy.get("[data-cy='select_day']").eq(0).click()

        cy.get("[data-cy='select_hour']").eq(0).click()
        
        cy.get("[data-cy='confirm_booking']").click()

        cy.get("[data-cy='back_to_home_page_button']").click()
    })

    it("login to Can Sell", () => {
        cy.viewport(1400, 1000)

        login(false);

        cy.get("[data-cy='sell_now_button_footer']").click();


        cy.get("[data-cy='sell_item_button']").eq(1).click();   

        cy.wait(1000);

        cy.wait(1000);

        selectOption("Please select brand", "BMW");

        selectOption("Please select year", "2013");
    
        cy.wait(2000);

        selectOption("Please select model", "116i");

        typeToInput("Mileage in kilometers", "514");


        typeToInput("Price", "5000000");

        cy.get("[data-cy='checkbox_sell_form']").eq(0).click();
        cy.get("[data-cy='checkbox_sell_form']").eq(1).click();
        cy.get("[data-cy='checkbox_sell_form']").eq(2).click();
        cy.get("[data-cy='checkbox_sell_form']").eq(3).click();

        cy.get("[data-cy='next_Button']").click();

        cy.get("[data-cy='inspection_at_house']").click();


        typeToInput("Contact name", "userName");
        
        typeToInput("Phone number", "01006994920");

        typeToInput("Another phone number", "01006994920");

        selectOption("City", "Cairo");

        typeToInput("Street", "egypt,cairo");

        selectOption("Area", "Cairo");

        typeToInput("Building number", "86");

        cy.get("[data-cy='select_date_and_time']").click()

        cy.get("[data-cy='select_day']").eq(0).click()

        cy.get("[data-cy='select_hour']").eq(0).click()
        
        cy.get("[data-cy='confirm_booking']").click()

        cy.get("[data-cy='back_to_home_page_button']").click()
    })

})



