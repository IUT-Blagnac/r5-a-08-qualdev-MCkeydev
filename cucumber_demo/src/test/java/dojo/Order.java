package dojo;

import java.util.ArrayList;
import java.util.List;

/**
 * Order.
 */
public class Order {
    private String from;
    private String to;
    private List<String> contents = new ArrayList<String>();

    private String message;

    /**
     * Adds a message to the order.
     * @param message
     */
    public void addMessage(String message) {
        this.message = message;
    }

    /**
     * Gets the ticket message
     * @return
     */
    public String getTicketMessage() {
        return "Message from " + from + " to " + to + ": " + message;
    }

    public void setOwner(String romeo) {
        this.from = romeo ;
    }

    public void setTarget(String juliette) {
        this.to = juliette ;
    }

    public List<String> getCocktails() {
        return contents;
    }
}
