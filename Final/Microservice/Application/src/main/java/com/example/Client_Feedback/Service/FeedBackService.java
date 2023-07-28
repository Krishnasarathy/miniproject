package com.example.Client_Feedback.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Client_Feedback.Entity.FeedBack;
import com.example.Client_Feedback.Repository.FeedBackRepo;

@Service
public class FeedBackService {
	
	@Autowired
	  private FeedBackRepo repo;
	  
	  public FeedBack addFeedback(FeedBack feedback) {
			return repo.save(feedback);
		}
	  public List<FeedBack> getAllFeedback() {
		    // Logic to fetch all feedback from the database
		    // You can use feedbackRepository.findAll() to get all feedback records
		    return repo.findAll();
		}


}
