package com.springboot.edms.message.request;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CreateDocumentForm {
    @NotBlank
    @Size(min=3, max = 1000)
    private String description;

    @NotBlank
    private String signer;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSigner() {
        return signer;
    }

    public void setSigner(String signer) {
        this.signer = signer;
    }
}
