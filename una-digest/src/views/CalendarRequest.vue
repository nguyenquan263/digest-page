<template>
<div class="col-md-12">
    <h1>Request a Calendar</h1>

    <div class="full" ng-if="calendarReq">
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
	</div>

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
                    <p class="input-group calendar-datepicker">
                        <input type="text" name="startDate" class="form-control" datepicker-popup="MM/dd/yyyy" v-model="calendar.period.startDate" is-open="datepicker.startDate.open" min-date="today" close-text="Close" placeholder="mm/dd/yyyy" show-weeks="false" required="required"/>
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-default"><i class="fa fa-calendar"></i></button>
                        </span>
                    </p>
                </div>

                <div class="form-group col-md-6">
                    <label for="End_Date">
                        End Date (optional)
                    </label>
                    <!--input class="form-control" type="date" id="End_Date" ng-model="requestForm.endDate" placeholder="mm/dd/yyyy"/-->
                    <p class="input-group calendar-datepicker">
                        <input type="text" name="endDate" class="form-control" datepicker-popup="MM/dd/yyyy" v-model="calendar.period.endDate" is-open="datepicker.endDate.open" min-date="today" close-text="Close" placeholder="mm/dd/yyyy" show-weeks="false"/>
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-default" ><i class="fa fa-calendar"></i></button>
                    </span>
                </p>
                </div>
            </div>
            
            <div class="form-row ml-2 mr-2">
                <div class="form-group col-md-6" ng-if="showDateTimeFields">
                    <label for="Start_Time">
                        Start Time (optional)
                    </label>
                    <input type="checkbox" ng-model="useField.startTime" ng-change="resetTime('startTime')"/>
                    <!--input class="form-control" type="time" id="Start_Time" ng-model="requestForm.startTime" ng-show="useStartTime" /-->
                    <timepicker class="calendar-timepicker" id="Start_Time" ng-model="requestForm.startTime" hour-step="1" minute-step="5" show-meridian="true" ng-show="useField.startTime"></timepicker>
                </div>

                <div class="form-group col-md-6" ng-if="showDateTimeFields">
                    <label for="End_Time">
                        End Time (optional)
                    </label>
                    <input type="checkbox" ng-model="useField.endTime" ng-change="resetTime('endTime')"/>
                    <timepicker class="calendar-timepicker" id="End_Time" ng-model="requestForm.endTime" hour-step="1" minute-step="5" show-meridian="true" ng-show="useField.endTime"></timepicker>
                    <!--input class="form-control" type="time" id="End_Time" ng-model="requestForm.endTime" ng-show="useEndTime" /-->
                </div>
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
            calendarCategories: ['Student', 'Faculty', 'Staff', 'All Employee', 'Everyone', 'Bereavement'],
            calendar: null
        }
    },
    created: function() {
        this.calendar = new CalendarModel.Calendar();
        this.calendar.period.startDate = "";
        this.calendar.period.endDate = "";
    }
}
</script>

<style>

</style>