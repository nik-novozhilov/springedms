package com.springboot.edms.controller;

import com.springboot.edms.Exception.ResourceNotFoundException;
import com.springboot.edms.message.request.CreateDocumentForm;
import com.springboot.edms.message.response.ResponseMessage;
import com.springboot.edms.model.Document;
import com.springboot.edms.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DocumentRestAPIs {

	@Autowired
	DocumentRepository documentRepository;

	@PostMapping("/api/document")
	public ResponseEntity<?> addDocument(@Valid @RequestBody CreateDocumentForm createDocumentForm, final @AuthenticationPrincipal UserDetails userDetails)
	{
		Document document = new Document(createDocumentForm.getDescription(), null, userDetails.getUsername(), createDocumentForm.getSigner(), "NEW");
		documentRepository.save(document);
		return new ResponseEntity<>(new ResponseMessage("Document with ID [" + document.getId() + "] created succesfully."), HttpStatus.OK);
	}

	@GetMapping("/api/document")
	@ResponseBody
	public List<Document> getAllDocuments() {
		List<Document> list = documentRepository.findAll();
		return list;
	}

	@DeleteMapping("/api/document/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long documentId, final @AuthenticationPrincipal UserDetails userDetails)
			throws ResourceNotFoundException{
		Document document = documentRepository.findById(documentId)
				.orElseThrow(() -> new ResourceNotFoundException("Document not found for this id :: " + documentId));

		documentRepository.delete(document);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Docuemnt deleted.", Boolean.TRUE);
		return response;
	}

	@GetMapping("/document/{id}")
	public ResponseEntity<Document> getDocumentById(@PathVariable(value = "id") Long documentId, final @AuthenticationPrincipal UserDetails userDetails)
			throws ResourceNotFoundException {
		Document document = documentRepository.findById(documentId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + documentId));
		return ResponseEntity.ok().body(document);
	}
}
