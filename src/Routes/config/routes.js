import ActivitiesForm from '../../Components/Activities/ActivitiesForm';
import CategoriesFormHook from '../../Components/Categories/CategoriesFormHook';
import NewsForm from '../../Components/News/NewsForm';
import SlidesFormHook from '../../Components/Slides/SlidesFormHook';
import TestimonialForm from '../../Components/Testimonials/TestimonialsForm';
import UsersForm from '../../Components/Users/UsersForm';
import SchoolCampaign from '../../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../../Campaigns/Toys/ToysCampaign';
import MembersForm from '../../Components/BackOffice/Members/MembersForm';
import ProjectsForm from '../../Components/BackOffice/Projects/ProjectsForm';
import ProjectsList from '../../Components/BackOffice/Projects/ProjectList';
import About from '../../Components/About/Nosotros';
import MembersList from '../../Components/BackOffice/Members/MembersList';
import Categories from '../../Components/Categories/Categories';
import TableSliders from '../../Components/BackOffice/Sliders/TableSliders';
import OrganizationForm from '../../Components/BackOffice/Organization/OrganizationForm';
import ActivitiesList from '../../Components/BackOffice/ActivitiesList/ActivitiesList';
import NewsList from '../../Components/BackOffice/News/NewsList';
import UsersList from '../../Components/Users/UsersList';

export const routes = [
  { path: '/backoffice/create-activity', component: ActivitiesForm },
  { path: '/backoffice/activities/edit', component: ActivitiesForm },
  { path: '/backoffice/activities', component: ActivitiesList },
  { path: '/backoffice/create-news', component: NewsForm },
  { path: '/backoffice/slides', component: TableSliders },
  { path: '/backoffice/slides/edit', component: SlidesFormHook },
  { path: '/backoffice/slides/create', component: SlidesFormHook },
  { path: '/backoffice/create-testimonials', component: TestimonialForm },
  { path: '/backoffice/users', component: UsersList },
  { path: '/backoffice/users/create', component: UsersForm },
  { path: '/backoffice/users/edit/:id', component: UsersForm },
  { path: '/backoffice/categories', component: Categories },
  { path: '/backoffice/categories/create', component: CategoriesFormHook },
  { path: '/backoffice/categories/edit', component: CategoriesFormHook },
  { path: '/backoffice/users/edit/:id', component: UsersForm },
  { path: '/backoffice/create-project', component: ProjectsForm },
  { path: '/backoffice/edit-project', component: ProjectsForm },
  { path: '/backoffice/projects', component: ProjectsList },
  { path: '/backoffice/users/edit/:id', component: UsersForm },
  { path: '/backoffice/school-campaign', component: SchoolCampaign },
  { path: '/backoffice/toys-campaign', component: ToysCampaign },
  { path: '/backoffice/nosotros', component: About },
  { path: '/backoffice/members', component: MembersList },
  { path: '/backoffice/members/edit', component: MembersForm },
  { path: '/backoffice/members/create', component: MembersForm },
  { path: '/backoffice/organization', component: OrganizationForm },
  { path: '/backoffice/news', component: NewsList },
  { path: '/backoffice/news/create', component: NewsForm },
  { path: '/backoffice/news/edit', component: NewsForm },
];
