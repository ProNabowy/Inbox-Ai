import { login } from "../../utils/login";

describe("sell Fixed Yachts", (() => {
    const selectOption = (placeholder: string, value: any) => {
        cy.get(`input[placeholder="${placeholder}"]`).click();

        cy.get(`input[placeholder="${placeholder}"]`).type(value);

        cy.contains(value).eq(0).click();
    }
    

    const typeToInput = (placeholder: string, value: any) => {
        cy.get(`[placeholder="${placeholder}"]`).click();

        cy.get(`[placeholder="${placeholder}"]`).type(value);
   }
    it("can login to sell fixed yachts", () => {
         cy.viewport(1400, 1000)
        
        login(false);
        
        cy.get("[data-cy='sell_now_button']").click();
        
        cy.get("[data-cy='sell_product_button']").eq(1).click();
        
         cy.get("[data-cy='sell_item_button']").eq(1).click();   
        
        
        cy.wait(1000);

        selectOption("Please select brand", "Benetti");

        selectOption("Please select year", "1996");
        
        selectOption("Please select model", "Benetti Classic 121");

        selectOption("Please select engine type", "Hybrid Engine (Diesel-Electric)");

        typeToInput("No. of Bedrooms", "81");

        typeToInput("Draft (Optional)", "946");

        typeToInput("Length", "150");
        
        typeToInput("Power (Optional)", "370");
        
        typeToInput("Price", "500000000");
        
        cy.get("[data-cy='checkbox_sell_form']").eq(0).click();
        cy.get("[data-cy='checkbox_sell_form']").eq(1).click();
        cy.get("[data-cy='checkbox_sell_form']").eq(2).click();

        cy.get("[data-cy='next_Button']").click();

        cy.get("[data-cy='upload-photo-button']").each(($el, index, $list) => {
            cy.wrap($el).click().selectFile('public/images/home/yachts.png');
		});
       
        selectOption("Country", "Egypt");

        selectOption("City", "Alexandria");

        typeToInput("Port name", "Alexandria Port");

        cy.get("[data-cy='finish_Button_yachts']").click();

    })
}))