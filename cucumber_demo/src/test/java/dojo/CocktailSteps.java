package dojo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CocktailSteps {
    private Order order;

    @Given("(.*) who wants to buy a drink")
    public void romeo_who_wants_to_buy_a_drink(String romeo) {
        order = new Order();
        order.setOwner(romeo);
    }

    @When("an order is declared for (.*)")
    public void an_order_is_declared_for_juliette(String juliette) {
        order.setTarget(juliette);
    }

    @Then("there is (\\d+) cocktails in the order")
    public void there_is_no_cocktail_in_the_order(int nbCocktails) {
        List<String> cocktails =  order.getCocktails();
        assertEquals(nbCocktails, cocktails.size());
    }

    @And("a message saying {string} is added")
    public void aMessageSayingIsAdded(String message) {
        order.addMessage(message);
    }

    @Then("the ticket must say {string}")
    public void theTicketMustSay(String expectedMessage) {
        assertEquals(order.getTicketMessage(), expectedMessage);
    }
}
