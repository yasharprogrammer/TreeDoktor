
INSERT INTO `email_templates` (`email_template_id`, `email_template_title`, `email_template_text`, `email_system_template`, `email_news_templates`, `system_label`) VALUES
(2, 'Tree Services Schedule for [JOB_ADDRESS]', '<!DOCTYPE html><html><head></head><body>\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif; color: #474a5d; padding-left: 0px; padding-right: 0px;">\n<p>Hello [CUSTOMER_NAME],</p>\n<p>This is in regard to the project at <em><strong>[JOB_ADDRESS]. &nbsp;</strong>P</em>lease be advised that you are scheduled for <em><strong>[TIME_AND_DATE]</strong></em>.&nbsp; Please note that we are highly weather dependent and our schedule may change at the last minute. In the event of cancellation, you will be re-booked&nbsp;on a priority basis or as soon as a date is available. If there are any openings in your area prior to the scheduled date we will let you know as well.</p>\n<ul circle="">[SERVICES_LIST]</ul>\n<ul circle=""></ul>\n<ul circle="">\n<li>Please make sure that full access to the job site is provided to our crew on the scheduled date otherwise call service fee will be charged.</li>\n<li>If there are any gates please leave them unlocked and keep the pets inside.</li>\n<li>Please remove any objects that may be in close proximity to the trees such&nbsp;as chairs, tables, light fixtures to avoid possible damages.</li>\n<li>We will need parking for our equipment&nbsp;on your driveway and&nbsp;near your house in order to perform our operations.</li>\n<li>If the tree is overhanging other properties, we will&nbsp;need access to your neighbouring&nbsp;properties in order to perform the work and proper&nbsp;cleanup.</li>\n</ul>\n<p><strong>If this date doesn''t work for you, please let us know ASAP&nbsp;via email or a phone call. Otherwise, we will see you on the date specified.</strong></p>\n<p>Thank you for choosing [COMPANY_NAME] and have a great day!</p>\n<p><em>[COMPANY_NAME] Scheduling</em></p>\n</div>\n</body></html>', 1, NULL, 'tree_services_schedule'),
(3, 'Stump Grinding Schedule for [JOB_ADDRESS]', '<!DOCTYPE html><html><head></head><body>\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif; color: #474a5d; padding-left: 0px; padding-right: 0px;">\n<p><span>Please be advised, your project has been scheduled for </span><strong><span>[TIME_AND_DATE]</span></strong><span>&nbsp;and our crew will complete <strong>Stump Grinding</strong></span><span>&nbsp;on your property at </span><strong><g class="gr_ gr_13 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del" id="13" data-gr-id="13">[JOB_ADDRESS]</g></strong><span>.<br /> </span></p>\n<p><span>All resulting mulch will be raked back into a neat pile and left onsite (the location of the stump). You can take advantage of using the mulch for garden beds, composts, or scatter under the trees for ground cover.</span></p>\n<p><span>The proximity of the stump to fences and other objects may complicate the technological process. In order to bring the equipment through a minimum clearance of 36 inches for straight-through access to the stump is required.&nbsp; 62 inches will be required for any 90 degrees turn.&nbsp; All rocks, concrete and metal objects must be removed by the home-owner to provide 3 feet of clearance around the stump.&nbsp;</span></p>\n<p>Call service fees of $100 will be charged automatically if clearance, access or parking will not be provided on the arranged day.</p>\n</div>\n</body></html>', 0, NULL, 'stump_grinding_schedule'),
(4, 'Types of Payment ', '<!DOCTYPE html><html><head></head><body><div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;"><p><span>Dear Customer,</span></p><p><span>Our methods of payment are as follows:&nbsp; </span></p><ol><li><span> </span><span>Internet email transfer sent to </span><a href="mailto:[COMPANY_EMAIL]"><span>[COMPANY_EMAIL]</span></a><span> using a password &ldquo;<g class="gr_ gr_23 gr-alert gr_spell gr_run_anim ContextualSpelling ins-del multiReplace" id="23" data-gr-id="23">[COMPANY_NAME]</g>&rdquo;</span></li><li><span>Cheque payable to <strong><em>[COMPANY_BILLING_NAME]</em></strong></span></li><li><span> </span><span>Visa or Master Card</span></li><li><span> </span><span>Debit or cash payments in office at [COMPANY_ADDRESS]</span></li></ol><p><span>Please transfer the payment to [COMPANY_BILLING_NAME] as soon as possible to avoid interest charges. Unpaid invoices will be charged an interest rate of 2% after 30 days from the invoicing and 2% each month thereafter.&nbsp;</span></p><p>Please let us know if you have any further questions.</p><p>Thank you for choosing [COMPANY_NAME] and we hope to serve you again in the future.</p><p>[COMPANY_NAME] Team</p><p>Hello, we just received the payment for your invoice. Thank you for your business and we hope to work with you in the future!</p><p><strong>We want to get it right!</strong>&nbsp;Let us know how we are doing. Please email us at&nbsp;[COMPANY_EMAIL]&nbsp;with any concerns, suggestions or compliments about our company or our team and how can we improve and serve you better in the future!</p></div></body></html>', 0, NULL, NULL),
(5, 'Deposit Request', '<!DOCTYPE html><html><head></head><body><div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;"><p><span>Dear Customer,</span></p><p>Thank you very much for choosing [COMPANY_NAME] for your tree care needs. We will be more than happy to schedule your project as soon as possible. Please call us in order to provide a 10% deposit as per our contract.</p><p>&nbsp; Our methods of payment are as follows:&nbsp;</p><ol><li><span> </span><span>Internet email transfer sent to </span><a href="mailto:[COMPANY_EMAIL]"><span>[COMPANY_EMAIL]</span></a><span> using a password &ldquo;[COMPANY_NAME]&rdquo;</span></li><li><span> </span><span>Cheque payable to <strong><em>[COMPANY_BILLING_NAME]</em></strong></span></li><li><span> </span><span>Visa or Master Card</span></li><li><span> </span><span>Debit or cash payments in office at [COMPANY_ADDRESS]</span></li></ol><p>&nbsp; We hope to hear from you soon and thank you again for choosing [COMPANY_NAME].&nbsp;</p><p>[COMPANY_NAME] Team</p></div></body></html>', 0, NULL, NULL),
(6, 'Tree work reschedule [JOB_ADDRESS]', '<!DOCTYPE html><html><head></head><body>\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif; color: #474a5d; padding-left: 0px; padding-right: 0px;">\n<p>Hello,</p>\n<p>Due to unsafe weather conditions, unfortunately, we will not be able to proceed with the&nbsp;tree services as scheduled. Our schedule department&nbsp;will contact you shortly to make other arrangements.&nbsp;</p>\n<p>We apologize for the inconvenience.&nbsp;</p>\n<p>[COMPANY_NAME] Team</p>\n</div>\n</body></html>', 0, NULL, 'tree_work_reschedule'),
(7, 'Invoice for Tree Services [JOB_ADDRESS]', '<!DOCTYPE html><html><head></head><body><div style=“font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif; color: #474A5D; padding-left: 0px; padding-right: 0px;“><p>Dear [CUSTOMER_NAME],</p><p>Please find the enclosed invoice for [JOB_ADDRESS].</p><p>Our methods of payment are as follows:&nbsp;</p><ol><li>&nbsp;Cheque payable to&nbsp;<strong><em>[COMPANY_BILLING_NAME]</em></strong></li><li>&nbsp;Visa or Master Card</li><li>&nbsp;Debit or cash payments in our office at [COMPANY_ADDRESS]</li></ol><p>For detailed information about your invoice, please follow the [CCLINK:“link”].</p><p>Please let us know if you have any further questions.</p><p>Thank you for choosing [COMPANY_NAME] and we hope to serve you again in the future.</p><p><strong>We want to get it right!</strong>&nbsp;Let us know how we are doing. Please email us at&nbsp;<a href=“mailto:[COMPANY_EMAIL]” target=“_blank”>[COMPANY_EMAIL]</a>&nbsp;. Be sure to include any concerns, suggestions or compliments about our company or how can we improve and serve you better in the future!</p></div></body></html>', 1, NULL, 'invoice_for_tree_services'),
(8, '[COMPANY_NAME] Team', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;">\r\n<p>Hello, could you please give us some clarifications about the estimate request?</p>\r\n</div>\r\n</body>\r\n</html>', 0, NULL, NULL),
(9, 'Thank you message', '<!DOCTYPE html><html><head></head><body><div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;"><p>Hello, we just received the payment for your invoice. Thank you for your business and we hope to work with you in the future!</p><p><strong>We want to get it right</strong>!&nbsp;Let us know how we are doing. Please email us at&nbsp;<em>[COMPANY_EMAIL]&nbsp;</em>with any concerns, suggestions or compliments about our company or our team and how can we improve and serve you better in the future!</p></div></body></html>', 1, NULL, NULL),
(10, 'New estimate for [JOB_ADDRESS]', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;">\r\n<p>Hello [CUSTOMER_NAME],</p>\r\n<p>Please find enclosed estimate for [JOB_ADDRESS].<br />Let me know if you have any questions, or would like to go ahead and schedule the work.</p>\r\n<p>If you would like to schedule the work, you can either email us a signed copy of the estimate or send us a 10% deposit for the work. We take Visa, MasterCard, Cash, Check or E-transfer for a deposit. You can give us a deposit by calling our offices at [COMPANY_PHONE] or via this [CCLINK]. Arborist&nbsp;reports require payment in full.<br><br>Also you can confirm estimate via this signature [SIGNATURELINK]<br><br></p>\r\n<p>Thank you very much for considering us, and have a good day!</p>\r\n<p><strong>We want to get it right!</strong>&nbsp;Let us know how we are doing. Please email us at&nbsp;<a href="mailto:[COMPANY_EMAIL]"><g class="gr_ gr_15 gr-alert gr_gramm gr_inline_cards gr_run_anim Style multiReplace" id="15" data-gr-id="15">[COMPANY_EMAIL]</g></a><g class="gr_ gr_15 gr-alert gr_gramm gr_inline_cards gr_disable_anim_appear Style multiReplace" id="15" data-gr-id="15">&nbsp;.</g> Be sure to include any concerns, suggestions or compliments about our company or how can we improve and serve you better in the future!</p>\r\n</div>\r\n</body>\r\n</html>', 1, NULL, 'new_estimate_for'),
(11, 'Overdue Invoice [JOB_ADDRESS]', '<!DOCTYPE html><html><head></head><body><div 11pt=“” font-family:=“” avenirnextltpro-regular=“” arial=“” sans-serif=“” color:=“” 474a5d=“” padding-left:=“” 0px=“” padding-right:=“”><div><span>Hi [CUSTOMER_NAME],</span></div><div><p>This is just a quick reminder that our invoice for the tree services performed at [JOB_ADDRESS] about a&nbsp;month ago is not paid yet. The copy of the invoice is attached below.</p><p>Our methods of payment are as follows:&nbsp;</p><ol><li>&nbsp;Cheque payable to&nbsp;<strong><em>[COMPANY_BILLING_NAME]</em></strong></li><li>&nbsp;Visa or Master Card</li><li>&nbsp;Debit or cash payments in our office at [COMPANY_ADDRESS]</li></ol><p>For detailed information about your invoice, please follow the [CCLINK:“link”].</p><p>Please let us know if you have any further questions.</p><p>Thank you for choosing [COMPANY_NAME] and we hope to serve you again in the future.</p><p><strong>We want to get it right!</strong>&nbsp;Let us know how we are doing. Please email us at&nbsp;<a href=“mailto:[COMPANY_EMAIL]” target=“_blank”>[COMPANY_EMAIL]</a>&nbsp;. Be sure to include any concerns, suggestions or compliments about our company or how can we improve and serve you better in the future!</p></div></div></body></html>', 1, NULL, 'overdue_invoice'),
(12, 'Confirmed Estimate', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;">\r\n<div><span>Hi [CUSTOMER_NAME],</span></div>\r\n<div>\r\n<p>This is the confirmation email that you estimate for the tree services at [JOB_ADDRESS] is now confirmed. The copy of the estimate is attached. Thank you for choosing [COMPANY_NAME] for your tree care needs!</p>\r\n<p>We will get back to you shortly with the date we will be coming to do the work. Meanwhile, you can call us or email anytime for any questions or concerns.&nbsp;</p>\r\n</div>\r\n</div>\r\n</body>\r\n</html>', 1, NULL, 'confirmed_estimate'),
(13, 'Review Request', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n</head>\r\n<body>\r\n<div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif;color: #474a5d; padding-left: 0px; padding-right: 0px;">\r\n<p>Hi [CUSTOMER_NAME],</p>\r\n<p>This is [ESTIMATOR_NAME] from [COMPANY_NAME]. We have recently done some work on your property and I am hoping that you were happy with our services.&nbsp;</p>\r\n<p>I would be extremely grateful if you could take a few minutes to share your feedback regarding your experience with us.</p>\r\n<p>Here are few sites you can leave us a review.&nbsp;</p>\r\n<p>Even a sentence or two would be greatly appreciated. It would definitely help [COMPANY_NAME] in drawing more customers like yourself to use our&nbsp;services.</p>\r\n<p>And if there&rsquo;s anything at all that I can do to help you, don&rsquo;t hesitate to let me know.</p>\r\n</div>\r\n</body>\r\n</html>', 0, NULL, NULL),
(14, 'Firewood Delivery for [JOB_ADDRESS]', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>Hello [CUSTOMER_NAME],</p>\n<p>This is in regards to the project at&nbsp;<em><strong>[JOB_ADDRESS]. &nbsp;</strong></em>Please be advised that you are scheduled for Firewood Delivery on&nbsp;<em><strong>[TIME_AND_DATE]</strong></em>.&nbsp; Please note that we are highly weather dependent and our schedule may change at the last minute. In the event of cancellation, you will be re-booked&nbsp;on a priority basis or as soon as a date is available. If there are any openings in your area prior to the scheduled date we will let you know as well.</p>\n<ul circle=""></ul>\n<ul circle="">\n<li>Please make sure that full access to the job site is provided to our crew on the scheduled date otherwise call service fee will be charged.</li>\n<li>If there are any gates please leave them unlocked and keep the pets inside.</li>\n<li>We will need a parking for our equipment&nbsp;on your driveway and&nbsp;near your house in order to perform our operations.</li>\n</ul>\n<p><strong>If this date doesn''t work for you, please let us know&nbsp;ASAP&nbsp;via email or a phone call. Otherwise, we will see you on the date specified.</strong></p>\n<p>Thank you for choosing [COMPANY_NAME] and have a great day!</p>\n<p><em>[COMPANY_NAME] Scheduling</em></p>\n</body>\n</html>', 0, NULL, 'firewood_delivery_for'),
(15, 'Estimator - Schedule appointment', '<!DOCTYPE html><html><head></head><body><p>Hello, [ESTIMATOR_NAME]. You have new schedule appointment.</p></body></html>', 1, NULL, 'estimator_schedule_appointment'),
(16, 'Client - Schedule appointment', '<!DOCTYPE html><html><head></head><body><p>Hello, [CUSTOMER_NAME]. This is an automatic message. Your have new appointment at {address}. Thank you.</p></body></html>', 1, NULL, 'client_schedule_appointment'),
(17, 'Partial Invoice for Tree Services [ADDRESS]', '<!DOCTYPE html><html><head></head><body><div style="font-size: 11pt; font-family: AvenirNextLTPro-Regular,Arial,sans-serif; color: #474a5d; padding-left: 0px; padding-right: 0px;"><p>Dear [CUSTOMER_NAME],</p><p>Please find the enclosed partial invoice for [ADDRESS].</p><p>Please let us know if you have any further questions.</p><p>Thank you for choosing [COMPANY_NAME] and we hope to serve you again in the future</p><p>[COMPANY_NAME] Team</p></div></body></html>', 1, NULL, 'partial_invoice'),
(18, 'Paid invoice from “[COMPANY_NAME]”', '<!DOCTYPE html><html><head></head><body><p data-renderer-start-pos="1">Dear [CUSTOMER_NAME],</p><p data-renderer-start-pos="15">Thank you for your payment.&nbsp;</p><p data-renderer-start-pos="45">Please find the invoice for [ADDRESS] attached.&nbsp;</p><p data-renderer-start-pos="96"></p><p data-renderer-start-pos="96">Thank you for choosing [COMPANY_NAME] and we hope to serve you again in the future.</p><p data-renderer-start-pos="184">[COMPANY_NAME] Team</p></body></html>', 0, NULL, 'invoice_paid_thanks');

