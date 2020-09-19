<template>
<div class="container col-md-12">

    <h1>Request a Calendar</h1>
    <!-- <div class="full" ng-if="calendarReq">
		<p class="highlight">
			<strong>
				Please read the following guidelines VERY carefully before submitting your campus event request:
			</strong>
		</p>
		<ul>
			<li>
				All calendar events will automatically go into a moderation queue for approval.
			</li>
			<li>
				Only those requests submitted by authorized students/employees will be published.
			</li>
			<li>
				All calendar events must be directly related to the University of North Alabama
			</li>
			<li>
				You are responsible for proofreading and entering the correct details. Your event will be published exactly as you have entered it.
			</li>
			<li>
				Note: this is nothing more than a request for a <strong>calendar listing</strong> of your event. To reserve a venue, <a ui-sref="calendar.venue">click here</a>.
			</li>
		</ul>
	</div> -->

    <div class="full">
		<p><em>
			Welcome to our campus announcement center.
			You can always check back here to find any campus announcements you read about in the twice-weekly email digest that we send out every Monday and Thursday morning at 11:00am.
			For more details about the procedures surrounding an announcement request, <a href="https://www.una.edu/web/email-digest/policies.html" target="_blank">click here</a>.
			For more details about the process of getting a request approved, <a href="https://www.una.edu/web/email-digest/process.html" target="_blank">click here</a>.
		</em></p>
	</div>

    <div class="full">
        <p>
			* Required fields
		</p>

        <form name="eventRequest">
            <label class="control-label" for="category">
				Calendar Category*
			</label>

            <div class="form-group col-md-12">

				<label class="radio-inline mr-5" v-for="(category, index) in calendarCategories" v-bind:key="index">
					<input class="mr-1" type="radio" name="category" v-model="calendar.category" id="inlineRadio1" value="{{category}}" required="required"/>
					<strong>
						{{category}}
					</strong>
				</label>
                <br>
				<span class="help-block">
					Choose the category that best fits your calendar.
				</span>
			</div>

            <div class="form-group col-md-12">
				<label for="Announcement_Title">
					Calendar Title*
				</label>
				<input type="text" class="form-control" id="Announcement_Title" v-model="calendar.title" name="accouncementTitle" required="required">
			</div>

            <div class="form-row ml-2 mr-2">
                <div class="form-group col-md-6">
                    <label for="Start_Date">
                        Start Date*
                    </label>
                    <!--input class="form-control" type="date" id="Start_Date" ng-model="requestForm.startDate" placeholder="mm/dd/yyyy"/-->
                    
                    <input type="text" id="startDate" class="form-control" v-model="calendar.period.startDate" placeholder="mm/dd/yyyy" required="required"/>
 
                </div>

                <div class="form-group col-md-6">
                    <label for="End_Date">
                        End Date (optional)
                    </label>
                    <!--input class="form-control" type="date" id="End_Date" ng-model="requestForm.endDate" placeholder="mm/dd/yyyy"/-->
                    
                    <input type="text" id="endDate" class="form-control" v-model="calendar.period.endDate" placeholder="mm/dd/yyyy"/>
                </div>
            </div>

            <div class="form-row ml-2 mr-2">
                <div class="form-group col-md-6">
                    <label for="Start_Date">
                        Start Time (optional)
                    </label>
                    <!--input class="form-control" type="date" id="Start_Date" ng-model="requestForm.startDate" placeholder="mm/dd/yyyy"/-->
                    
                    <input type="text" id="startTime" class="form-control" v-model="calendar.period.startTime" placeholder="hh:mm"/>
 
                </div>

                <div class="form-group col-md-6">
                    <label for="End_Date">
                        End Time (optional)
                    </label>
                    <!--input class="form-control" type="date" id="End_Date" ng-model="requestForm.endDate" placeholder="mm/dd/yyyy"/-->
                    
                    <input type="text" id="endTime" class="form-control" v-model="calendar.period.endTime" placeholder="hh:mm"/>
                </div>
            </div>

            <div class="form-group col-md-12">
				<label for="Announcement_Title">
					Location (optional)
				</label>
				<input type="text" class="form-control" id="Announcement_Title" v-model="calendar.location" name="accouncementLocation">
			</div>

            <div class="form-group col-md-12">
				<label for="Summary">
					Calendar Summary*
				</label>
				<textarea class="form-control" rows="5" id="summary" >
				</textarea>
			</div>

            <div class="form-group col-md-12" >
				<label for="Link_to_more_info">
					Link to more information (optional)
				</label>
				<input class="form-control" type="text" name="url" id="Link_to_more_info" placeholder="http://" />
				<span class="help-block">
					Contact your department's Web Lion about creating a page for your Calendar. If you need assistance linking to a PDF document please contact Jeremy Woods (jdwoods@una.edu) or Mitchel Moon (mrmoon@una.edu).
				</span>	
			</div>

			<div class="form-group col-md-12">
				<label for="Supplemental_image">
					Supplemental image (optional)
				</label>
				<input class="form-control" type="file" name="file" id="image" accept="image/x-png, image/jpeg" />

                <span class="help-block">
					Acceptable formats: <strong>.jpg, or .png</strong><br>
					Must be under 3 MB
				</span>
			</div>

            <!-- Just for spacing above h3 -->
			<div class="row">
				&nbsp;
			</div>

			<h3 class="page-header">
				Contact Information
			</h3>
            <hr>
			<div class="form-group col-md-12">
				<label for="Contact_Name">
					Contact Name*
				</label>
                
				<input class="form-control" type="text" id="Contact_Name" name="contactName"  required="required"/>
				<span class="help-block">
					You must be an authorized representative of your department/organization.
				</span>
			</div>
            <div class="form-row ml-2 mr-2">
                <div class="form-group col-md-6" >
                    <label class="control-label" for="Contact_Phone">
                        Contact Phone*
                    </label>
                    <input class="form-control" type="tel" name="contactPhone" placeholder="555-555-5555" id="contactPhone" required="required"/>
                    <span class="help-block">
                        What number can people call with questions?
                    </span>
                </div>

                <div class="form-group col-md-6">
                    <label for="Contact_Email">
                        Contact Email*
                    </label>
                    <input class="form-control" type="email" name="contactEmail" id="Contact_Email" placeholder="@una.edu"  required="required"/>
                    <span class="help-block">
                        Must use your UNA.edu email address.
                    </span>
                </div>
            </div>
            
            <div class="form-group col-md-12">
				<label for="Sponsoring_Department_Organization">
					Sponsoring Department/Organization*
				</label>
				<input class="form-control" type="text" id="Sponsoring_Department_Organization" name="sponsorOrg"  required="required"/>
			</div>

			<br/>
			<br/>

			<div class="form-group col-md-12" >
				<button type="button" class="btn btn-primary" >
					Submit
				</button>
				<span class="help-block">
					Please make sure all required fields have been filled out correctly.
				</span>
			</div>
            
        </form>

    </div>

</div>
</template>

<script>
import CalendarModel from '../models/Calendar';

export default {
    data: function() {
        return {
            calendarCategories: ['Academics'
            , 'Departments'
            , 'Athletics'
            , 'Club Sports'
            , 'Registered Student Organizations'
            , 'Off-Campus Opportunities'
            , 'Job Opportunities'],
            calendar: null,
        }
    },
    created: function() {
        this.calendar = new CalendarModel.Calendar();
        this.calendar.period.startDate = "";
        this.calendar.period.endDate = "";
        this.calendar.period.startTime = "";
        this.calendar.period.endTime = "";
    },
    mounted: function() {
        $('#startDate').pickadate({
            format: 'mm/dd/yyyy',
            min: true
        });

        $('#endDate').pickadate({
            format: 'mm/dd/yyyy',
            min: true
        });

        $('#startTime').pickatime();
        $('#endTime').pickatime();

        $('#summary').summernote({
            toolbar: [
                ['style', ['bold', 'italic', 'underline']],
                ['font', ['strikethrough']]
            ]
        });
    }
}
</script>

<style>

</style>