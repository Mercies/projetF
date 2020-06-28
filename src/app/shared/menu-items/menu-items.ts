import { Injectable } from "@angular/core";
import { TokenStorageService } from "../../core/services/token_storage/token-storage.service";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS_ADMIN_CLIENT = [
  {
    label: "Dashboard",
    main: [
      {
        state: "dashboard",
        name: "MENU_ITEM.HOME",
        type: "link",
        icon: "fa fa-tachometer",
      },
    ],
  },

  {
    label: "Administration",
    main: [
      {
        state: "user",
        name: "Utilisateur",
        icon: "fa fa-users",
        type: "link",
      },

      {
        state: "level",
        name: "Level",
        icon: "fa fa-signal",
        type: "link",
      },
      {
        state: "branch",
        name: "Branch",
        icon: "fa fa-institution",
        type: "link",
      },
    ],
  },
];
const MENUITEMS_STUDENT = [
  {
    label: "Dashboard",
    main: [
      {
        state: "dashboard",
        name: "MENU_ITEM.HOME",
        type: "link",
        icon: "fa fa-tachometer",
      },
    ],
  },

  {
    label: "MENU_ITEM.STUDENT_SPACE",
    main: [
      {
        state: "studentSpace",
        name: "MENU_ITEM.STUDENT_SPACE",
        type: "link",
        icon: "icofont icofont-student-alt",
      },
    ],
  },
];
const MENUITEMS_TEACHER = [
  {
    label: "Dashboard",
    main: [
      {
        state: "dashboard",
        name: "MENU_ITEM.HOME",
        type: "link",
        icon: "fa fa-tachometer",
      },
    ],
  },
  {
    label: "Module",
    main: [
      {
        state: "module",
        name: "MENU_ITEM.MANAGED_MODULE",
        icon: "fa fa-bookmark",
        type: "link",
      },
    ],
  },
  {
    label: "Cour",
    main: [
      {
        state: "course",
        name: "MENU_ITEM.COURSE",
        icon: "fa fa-book",
        type: "link",
      },
    ],
  },
  {
    label: "Td",
    main: [
      {
        state: "td",
        name: "Td",
        icon: "fa fa-pencil",
        type: "link",
      },
    ],
  },
 
  {
    label: "Td",
    main: [
      {
        state: "question",
        name: "Question",
        icon: "fa fa-question",
        type: "link",
      },
    ],
  },
 
];
const MENUITEMS = [
  {
    label: "Dashboard",
    main: [
      {
        state: "dashboard",
        name: "MENU_ITEM.HOME",
        type: "link",
        icon: "fa fa-tachometer",
      },
    ],
  },
  {
    label: "MENU_ITEM.STUDENT_SPACE",
    main: [
      {
        state: "studentSpace",
        name: "MENU_ITEM.STUDENT_SPACE",
        type: "link",
        icon: "icofont icofont-student-alt",
      },
    ],
  },
  {
    label: "Module",

    main: [
      {
        state: "module_menu",
        name: "MENU_ITEM.PROFESSOR_SPACE",
        type: "sub",
        icon: "icofont icofont-teacher",
        children: [
          {
            state: "module",
            name: "MENU_ITEM.MANAGED_MODULE",
            icon: "fa fa-bookmark",
          },
          {
            state: "course",
            name: "MENU_ITEM.COURSE",
            icon: "fa fa-book",
          },
          {
            state: "td",
            name: "Td",
            icon: "fa fa-pencil",
          },
          {
            state: "question",
            name: "Question",
            icon: "fa fa-question",
          },
        ],
      },
    ],
  },

  {
    label: "Administration",
    main: [
      {
        state: "administration_menu",
        name: "Administration",
        type: "sub",
        icon: "fa fa-users",
        children: [
          {
            state: "user",
            name: "Utilisateur",
            icon: "fa fa-users",
          },
          {
            state: "organization",
            name: "Organization",
            icon: "fa fa-building-o",
          },
          {
            state: "level",
            name: "Level",
            icon: "fa fa-signal",
          },
          {
            state: "branch",
            name: "Branch",
            icon: "fa fa-institution",
          },
        ],
      },
    ],
  },
];

@Injectable()
export class MenuItems {
  constructor(private tokenStorageService:TokenStorageService){

  } 
  getAll(): Menu[] {
    const role =this.tokenStorageService.getRoleUser()!==null?this.tokenStorageService.getRoleUser().name:null;
  
    if(role){
      switch (role) {
       case "ROLE_STUDENT":
         return MENUITEMS_STUDENT;
      case "ROLE_TEACHER":
        return MENUITEMS_TEACHER;
        case "ROLE_ADMIN_CLIENT":
          return MENUITEMS_ADMIN_CLIENT;
          
       default:
         break;
     }
    }
  }

  /*add(menu: Menu) {
      MENUITEMS.push(menu);
    }*/
}
