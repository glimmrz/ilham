import {
  ArrowRight,
  CheckCheck,
  Edit,
  Heart,
  LogIn,
  Plus,
  Search,
  Trash,
  UserPlus,
} from "lucide-react";

const Icons = {
  search: Search,
  heart: Heart,
  login: LogIn,
  register: UserPlus,
  check: CheckCheck,
  delete: Trash,
  edit: Edit,
  plus: Plus,
  arrowRight: ArrowRight,
  location: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M52 96a6.457 6.457 0 0 1-4.596-1.904c-3.139-3.14-30.659-31.284-30.627-52.478C16.807 21.509 35.014 8 52 8c16.984 0 35.191 13.509 35.224 33.618.033 21.241-27.492 49.347-30.63 52.481A6.467 6.467 0 0 1 52 96z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M50 94a6.457 6.457 0 0 1-4.596-1.904c-3.139-3.14-30.659-31.284-30.627-52.478C14.807 19.509 33.014 6 50 6c16.984 0 35.191 13.509 35.224 33.618.033 21.241-27.492 49.347-30.63 52.481A6.467 6.467 0 0 1 50 94z"
      />
      <path
        fill="#f4665c"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M50 12.5c-14.043 0-28.699 11.151-28.723 27.128C21.248 58.746 50 87.5 50 87.5s28.754-28.714 28.723-47.872C78.698 23.675 64.043 12.5 50 12.5z"
      />
      <circle cx={50} cy={40.147} r={13.147} fill="#f2f2f2" />
    </svg>
  ),
  box: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        fill="#1d1d1b"
        d="M32.625 93C19.828 93 14 83.295 14 74.277V69.5c0-3.584 2.916-6.5 6.5-6.5H24V17.5c0-3.584 2.916-6.5 6.5-6.5h53c3.584 0 6.5 2.916 6.5 6.5v56.718C90 81.768 85 93 71.227 93H32.625z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M30.625 91C17.828 91 12 81.295 12 72.277V67.5c0-3.584 2.916-6.5 6.5-6.5H22V15.5c0-3.584 2.916-6.5 6.5-6.5h53c3.584 0 6.5 2.916 6.5 6.5v56.718C88 79.768 83 91 69.227 91H30.625z"
      />
      <path
        fill="#70bfff"
        d="M69.226 84.5H28.5v-69l53 .295V72.27s0 12.23-12.274 12.23z"
      />
      <path
        fill="#d9eeff"
        d="M62 72.686V69H18v3.686S18 85 30.395 85h44C62 85 62 72.686 62 72.686z"
      />
      <circle cx={39.5} cy={28.5} r={1.5} fill="#d9eeff" />
      <path
        fill="#d9eeff"
        d="M70.5 30h-22a1.5 1.5 0 0 1 0-3h22a1.5 1.5 0 0 1 0 3z"
      />
      <circle cx={39.5} cy={38.5} r={1.5} fill="#d9eeff" />
      <path
        fill="#d9eeff"
        d="M70.5 40h-22a1.5 1.5 0 0 1 0-3h22a1.5 1.5 0 0 1 0 3z"
      />
      <circle cx={39.5} cy={48.5} r={1.5} fill="#d9eeff" />
      <path
        fill="#d9eeff"
        d="M70.5 50h-22a1.5 1.5 0 0 1 0-3h22a1.5 1.5 0 0 1 0 3z"
      />
      <path
        fill="#40396e"
        d="M69.226 86H30.625C19.87 86 17 77.374 17 72.277V67.5a1.5 1.5 0 0 1 1.5-1.5H27V15.5a1.5 1.5 0 0 1 1.5-1.5h53a1.5 1.5 0 0 1 1.5 1.5v56.718C83 76.985 80.121 86 69.226 86zM20 69v3.277C20 73.375 20.298 83 30.625 83h38.601C79.877 83 80 72.658 80 72.218V17H30v50.5a1.5 1.5 0 0 1-1.5 1.5H20z"
      />
    </svg>
  ),
  user: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M16.5 96a6.457 6.457 0 0 1-4.596-1.904A6.457 6.457 0 0 1 10 89.5c0-8.399 5.299-15.929 13.196-18.768l10.442-4.113c-1.799-2.709-2.942-5.958-3.668-9.011-1.639-.618-1.669-2.528-2.873-3.907-3.807-4.358-6.706-11.579-2.71-16.249a8.81 8.81 0 0 1 1.302-1.237c-1.416-7.572-.619-14.062 2.383-19.337 4.146-7.286 11.211-9.842 14.056-10.603C43.247 5.976 47.263 5 51.973 5c7.938 0 12.125 2.782 14.332 5.704 4.739 1.818 8.327 4.93 10.441 9.082 2.909 5.712 2.483 12.156 1.646 16.479a8.75 8.75 0 0 1 1.239 1.187c3.997 4.672 2.539 12.782-1.268 17.14a10.77 10.77 0 0 1-4.052 2.912c-.607 2.866-1.739 6.223-3.843 9.156l10.385 4.09C88.72 73.578 94 81.101 94 89.5c0 3.584-2.916 6.5-6.5 6.5h-71z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M14.5 94a6.457 6.457 0 0 1-4.596-1.904A6.457 6.457 0 0 1 8 87.5c0-8.399 5.299-15.929 13.196-18.768l10.442-4.113c-1.799-2.709-2.942-5.958-3.668-9.011a10.751 10.751 0 0 1-4.316-3.017c-3.807-4.358-5.264-12.469-1.268-17.139a8.81 8.81 0 0 1 1.302-1.237c-1.416-7.572-.619-14.062 2.383-19.337 4.146-7.286 11.211-9.842 14.056-10.603C41.246 3.976 45.262 3 49.972 3c7.938 0 12.125 2.782 14.332 5.704 4.739 1.818 8.327 4.93 10.441 9.082 2.909 5.712 2.483 12.156 1.646 16.479a8.75 8.75 0 0 1 1.239 1.187c3.997 4.672 2.539 12.782-1.268 17.14a10.77 10.77 0 0 1-4.052 2.912c-.607 2.866-1.739 6.223-3.843 9.156l10.385 4.09C86.72 71.578 92 79.101 92 87.5c0 3.584-2.916 6.5-6.5 6.5h-71z"
      />
      <path
        fill="#ffc7a3"
        d="M76.545 74.828 59 69.009l1.478-6.812c3.73-3.02 4.386-7.224 6.141-12.574 1.469 1.375 3.98.863 5.875-1.306 2.061-2.359 2.609-5.779 1.225-7.638-1.106-1.485-3.112-1.521-4.924-.273.503-3.247.205-6.343.205-8.958 0-12.112-8.216-19.43-19-19.43s-19 7.318-19 19.43c0 2.662-.21 5.823.421 9.134-.421-1.573-2.99-1.456-4.146.096-1.385 1.859-.836 5.278 1.225 7.638 2.061 2.359 3.834 2.765 5.218.906.006-.007.01-.016.015-.024C35 55 35.664 58.91 39.014 62.045L41 69.009l-17.545 5.819A13.443 13.443 0 0 0 14.5 87.5h71a13.444 13.444 0 0 0-8.955-12.672z"
      />
      <path
        fill="#40396e"
        d="M50.192 65.009c4.833 0 9.284-2.582 9.284-2.582s-2.223 6.582-9.284 6.582c-7.005 0-9.732-6.654-9.732-6.654s4.899 2.654 9.732 2.654z"
        opacity={0.35}
      />
      <path
        fill="#707cc0"
        d="m76.545 74.828-16.648-5.46c-.665 4.878-4.836 8.641-9.897 8.641s-9.232-3.763-9.897-8.641l-16.648 5.46A13.443 13.443 0 0 0 14.5 87.5h71a13.444 13.444 0 0 0-8.955-12.672z"
      />
      <path
        fill="none"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M50 11.518c-10.784 0-19.5 7.818-19.5 19.93 0 2.662.369 4.741 1 8.052-1.874-1.424-3.574-.523-4.174.179-1.507 1.761-.836 6.278 1.225 8.638 2.061 2.359 4.949 1.193 4.949 1.193.006-.007-.5 7.491 6 14v5l-16.045 6.319A13.44 13.44 0 0 0 14.5 87.5v0h71v0a13.444 13.444 0 0 0-8.955-12.672L60.5 68.509v-5c6.5-6.509 5.994-14.007 6-14 0 0 2.905 1.167 4.966-1.193 2.061-2.359 2.732-6.877 1.225-8.638-.6-.701-2.317-1.602-4.191-.179.631-3.311 1-5.39 1-8.052 0-12.11-8.716-19.929-19.5-19.929"
      />
      <path
        fill="#40396e"
        d="M40.079 23H59.92c2.777 0 4.856 2.207 5.174 4.966C66.203 37.577 67.088 40 67.088 40h5.832a2.44 2.44 0 0 0-.229-.321c-.6-.701-2.238-1.52-4.112-.096.631-3.311.921-5.472.921-8.134 0-12.112-8.716-19.93-19.5-19.93s-19.5 7.818-19.5 19.93c0 2.662.29 4.823.921 8.134-1.874-1.424-3.495-.605-4.095.096a2.611 2.611 0 0 0-.229.321h5.813s.907-2.242 1.995-12.034c.307-2.76 2.397-4.966 5.174-4.966z"
      />
      <path
        fill="#40396e"
        d="M29.536 37.253s2.162-2.723 4.272-3.25c0 0 25.818-1.581 27.885-14.733C63.918 5.112 46.381 7.78 41.418 9.107c-4.348 1.163-17.924 6.724-11.882 28.146z"
      />
      <path
        fill="#40396e"
        d="M59.57 21.629s-.365 3.762 6.643 12.37l4.187 3.349s7.44-19.747-9.633-24.561l-1.197 8.842z"
      />
    </svg>
  ),
  email: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="M71.5 87a6.508 6.508 0 0 1-6.5-6.5V64.571l-9.1 6.825c-1.119.839-2.504 1.3-3.9 1.3s-2.781-.461-3.898-1.298L39 64.571V80.5c0 3.584-2.916 6.5-6.5 6.5H19.857C13.319 87 8 81.681 8 75.143v-44.09c0-7.85 6.387-14.236 14.236-14.236 3.059 0 6.092 1.011 8.539 2.846L52 35.723 73.2 19.68a14.353 14.353 0 0 1 8.563-2.863c7.85 0 14.236 6.386 14.236 14.236v44.09C96 81.681 90.681 87 84.143 87H71.5z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M69.5 85a6.508 6.508 0 0 1-6.5-6.5V62.571l-9.1 6.825c-1.119.839-2.504 1.3-3.9 1.3s-2.781-.461-3.898-1.298L37 62.571V78.5c0 3.584-2.916 6.5-6.5 6.5H17.857C11.319 85 6 79.681 6 73.143v-44.09c0-7.85 6.387-14.236 14.236-14.236 3.059 0 6.092 1.011 8.539 2.846L50 33.723 71.2 17.68a14.353 14.353 0 0 1 8.563-2.863c7.85 0 14.236 6.386 14.236 14.236v44.09C94 79.681 88.681 85 82.143 85H69.5z"
      />
      <path
        fill="#96c362"
        d="m87.5 36-9 4.911-9 8.482V78.5h12.643a5.356 5.356 0 0 0 5.357-5.357V36z"
      />
      <path
        fill="#70bfff"
        d="m12.5 36 6.505 3.054L30.5 49.393V78.5H17.857a5.356 5.356 0 0 1-5.357-5.357V36z"
      />
      <path
        fill="#ff7575"
        d="M69.643 27.143 50 41.875 30.357 27.143 28.571 37.5l1.786 11.964L50 64.196l19.643-14.732L71.429 37.5z"
      />
      <path
        fill="#f4665c"
        d="M12.5 29.053v7.024l18 13.5v-22.5l-5.623-4.214a7.735 7.735 0 0 0-12.377 6.19z"
      />
      <path
        fill="#ffc571"
        d="M87.5 29.053v7.024l-18 13.5v-22.5l5.623-4.214a7.735 7.735 0 0 1 12.377 6.19z"
      />
      <path
        fill="#40396e"
        d="M82.143 80H69.5a1.5 1.5 0 0 1-1.5-1.5V52.571L50.9 65.396a1.505 1.505 0 0 1-1.801 0L32 52.571V78.5a1.5 1.5 0 0 1-1.5 1.5H17.857A6.865 6.865 0 0 1 11 73.143v-44.09c0-5.093 4.144-9.236 9.236-9.236 1.984 0 3.952.656 5.54 1.846L50 39.994l24.218-18.327a9.306 9.306 0 0 1 5.546-1.85c5.093 0 9.236 4.144 9.236 9.236v44.09A6.865 6.865 0 0 1 82.143 80zM71 77h11.143A3.861 3.861 0 0 0 86 73.143v-44.09a6.244 6.244 0 0 0-6.236-6.236c-1.34 0-2.669.443-3.741 1.247L50.905 43.071a1.502 1.502 0 0 1-1.811 0L23.972 24.059a6.269 6.269 0 0 0-3.735-1.243 6.244 6.244 0 0 0-6.236 6.236v44.09A3.86 3.86 0 0 0 17.857 77H29V49.571a1.502 1.502 0 0 1 2.4-1.2L50 62.321l18.6-13.95a1.5 1.5 0 0 1 2.4 1.2V77z"
      />
    </svg>
  ),
  verified: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M52 96a6.514 6.514 0 0 1-4.827-2.146l-4.9-5.444-7.11 2.189a6.512 6.512 0 0 1-5.151-.577 6.535 6.535 0 0 1-3.096-4.173l-1.643-7.122-7.12-1.644a6.518 6.518 0 0 1-4.172-3.087 6.523 6.523 0 0 1-.579-5.164l2.188-7.106-5.439-4.894A6.512 6.512 0 0 1 8 52c0-1.839.783-3.6 2.15-4.83l5.44-4.896-2.19-7.112a6.519 6.519 0 0 1 .581-5.158 6.519 6.519 0 0 1 4.176-3.088l7.116-1.643 1.643-7.12a6.523 6.523 0 0 1 3.085-4.17 6.527 6.527 0 0 1 5.158-.583l7.114 2.19 4.895-5.438c1.224-1.355 2.982-2.13 4.832-2.13s3.608.775 4.827 2.124l4.9 5.444 7.11-2.189a6.522 6.522 0 0 1 5.146.574 6.535 6.535 0 0 1 3.101 4.176l1.643 7.122 7.12 1.644a6.517 6.517 0 0 1 4.172 3.087 6.523 6.523 0 0 1 .579 5.164l-2.188 7.106 5.439 4.894A6.511 6.511 0 0 1 96 52a6.51 6.51 0 0 1-2.15 4.83l-5.44 4.896 2.19 7.112a6.519 6.519 0 0 1-.581 5.158 6.52 6.52 0 0 1-4.176 3.088l-7.116 1.643-1.643 7.12a6.529 6.529 0 0 1-3.085 4.17 6.54 6.54 0 0 1-3.25.869 6.497 6.497 0 0 1-1.903-.285l-7.12-2.19-4.894 5.437A6.518 6.518 0 0 1 52 96z"
        opacity={0.35}
      />
      <path
        fill="#F2F2F2"
        d="M50 94a6.514 6.514 0 0 1-4.827-2.146l-4.9-5.444-7.11 2.189a6.512 6.512 0 0 1-5.151-.577 6.535 6.535 0 0 1-3.096-4.173l-1.643-7.122-7.12-1.644a6.518 6.518 0 0 1-4.172-3.087 6.523 6.523 0 0 1-.579-5.164l2.188-7.106-5.439-4.894A6.512 6.512 0 0 1 6 50c0-1.839.783-3.6 2.15-4.83l5.44-4.896-2.19-7.112a6.519 6.519 0 0 1 .581-5.158 6.519 6.519 0 0 1 4.176-3.088l7.116-1.643 1.643-7.12a6.523 6.523 0 0 1 3.085-4.17 6.527 6.527 0 0 1 5.158-.583l7.114 2.19 4.895-5.438c1.224-1.355 2.982-2.13 4.832-2.13s3.608.775 4.827 2.124l4.9 5.444 7.11-2.189a6.522 6.522 0 0 1 5.146.574 6.535 6.535 0 0 1 3.101 4.176l1.643 7.122 7.12 1.644a6.517 6.517 0 0 1 4.172 3.087 6.523 6.523 0 0 1 .579 5.164l-2.188 7.106 5.439 4.894A6.511 6.511 0 0 1 94 50a6.51 6.51 0 0 1-2.15 4.83l-5.44 4.896 2.19 7.112a6.519 6.519 0 0 1-.581 5.158 6.52 6.52 0 0 1-4.176 3.088l-7.116 1.643-1.643 7.12a6.529 6.529 0 0 1-3.085 4.17 6.54 6.54 0 0 1-3.25.869 6.497 6.497 0 0 1-1.903-.285l-7.12-2.19-4.894 5.437A6.518 6.518 0 0 1 50 94z"
      />
      <path
        fill="#42A5F5"
        stroke="#40396E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m50 12.5 7.67 8.523 11.08-3.41 2.557 11.08 11.08 2.557-3.41 11.08L87.5 50l-8.523 7.67 3.41 11.08-11.08 2.557-2.557 11.08-11.08-3.41L50 87.5l-7.67-8.523-11.08 3.41-2.557-11.08-11.08-2.557 3.41-11.08L12.5 50l8.523-7.67-3.41-11.08 11.08-2.557 2.557-11.08 11.08 3.41L50 12.5z"
      />
      <path
        fill="#F2F2F2"
        d="M43.923 62.167a2.274 2.274 0 0 1-1.612-.667l-7.617-7.604a2.282 2.282 0 0 1 3.224-3.23l6.004 5.994 18.16-18.158a2.28 2.28 0 1 1 3.225 3.225l-19.77 19.771a2.275 2.275 0 0 1-1.614.669z"
      />
    </svg>
  ),
  coupon: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        fill="#1d1d1b"
        d="M14.5 86C9.813 86 6 82.187 6 77.5v-51c0-4.687 3.813-8.5 8.5-8.5h75c4.687 0 8.5 3.813 8.5 8.5v51c0 4.687-3.813 8.5-8.5 8.5h-75z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M12.5 84C7.813 84 4 80.187 4 75.5v-51c0-4.687 3.813-8.5 8.5-8.5h75c4.687 0 8.5 3.813 8.5 8.5v51c0 4.687-3.813 8.5-8.5 8.5h-75z"
      />
      <path
        fill="#ff7575"
        d="M10.5 24.5v51a2 2 0 0 0 2 2h75a2 2 0 0 0 2-2v-51a2 2 0 0 0-2-2h-75a2 2 0 0 0-2 2z"
      />
      <path
        fill="#fff"
        d="M38.5 52.983c-2.377 0-4.221-.815-5.533-2.443C31.656 48.911 31 46.718 31 43.962s.662-4.942 1.988-6.557c1.325-1.614 3.162-2.422 5.512-2.422 2.35 0 4.187.814 5.512 2.443C45.337 39.055 46 41.234 46 43.962c0 2.756-.663 4.949-1.988 6.578-1.325 1.629-3.162 2.443-5.512 2.443zm0-4c.78 0 1.391-.399 1.835-1.198.443-.798.665-2.079.665-3.844s-.222-3.032-.666-3.802c-.444-.77-1.055-1.156-1.835-1.156-.806 0-1.425.378-1.855 1.134-.429.757-.644 2.032-.644 3.824 0 1.821.215 3.117.645 3.886.43.771 1.048 1.156 1.855 1.156zm6.002 14.742c-.42.702-.94 1.106-1.557 1.215a2.543 2.543 0 0 1-1.725-.284 2.387 2.387 0 0 1-1.115-1.316c-.21-.58-.105-1.208.316-1.883L55.526 36.27c.421-.702.94-1.113 1.557-1.235a2.463 2.463 0 0 1 1.725.263c.532.297.897.736 1.094 1.316.196.581.098 1.209-.294 1.883L44.502 63.725zM61.5 64.983c-2.377 0-4.221-.814-5.533-2.443C54.656 60.911 54 58.705 54 55.921c0-2.757.662-4.935 1.988-6.536 1.324-1.601 3.162-2.402 5.512-2.402 2.35 0 4.187.808 5.512 2.422C68.337 51.02 69 53.192 69 55.921c0 2.784-.656 4.991-1.967 6.619-1.312 1.629-3.156 2.443-5.533 2.443zm0-4c.806 0 1.424-.392 1.855-1.178.43-.785.645-2.075.645-3.87 0-1.739-.222-3.001-.665-3.786-.444-.785-1.056-1.178-1.835-1.178-.807 0-1.425.379-1.855 1.136-.43.757-.645 2.034-.645 3.828 0 1.823.215 3.12.645 3.891.43.772 1.048 1.157 1.855 1.157z"
      />
      <path
        fill="none"
        stroke="#40396e"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="M10.5 24.5v51a2 2 0 0 0 2 2h75a2 2 0 0 0 2-2v-51a2 2 0 0 0-2-2h-75a2 2 0 0 0-2 2z"
      />
    </svg>
  ),
  revenue: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      {...props}
      viewBox="0 0 100 100"
    >
      <path
        d="M52,99c-11.213,0-41,0-41-29c0-16.432,9.382-33.224,22.792-41.569l-4.549-14.17 c-0.746-2.651,0.267-5.496,2.52-7.079C32.867,6.407,34.158,6,35.501,6c1.364,0,2.671,0.419,3.781,1.213l2.516,1.798l1.106-1.106 C44.132,6.676,45.764,6,47.5,6s3.368,0.676,4.596,1.904L52.5,8.308l0.404-0.403C54.132,6.676,55.764,6,57.5,6 s3.368,0.676,4.596,1.904l1.106,1.106l2.519-1.8C66.826,6.42,68.134,6,69.499,6c1.343,0,2.634,0.407,3.734,1.179 c2.261,1.593,3.271,4.438,2.523,7.087l-4.715,14.711C83.959,37.506,93,54.087,93,70C93,99,63.213,99,52,99z"
        opacity=".35"
      ></path>
      <path
        fill="#f2f2f2"
        d="M50,97C38.787,97,9,97,9,68c0-16.432,9.382-33.224,22.792-41.569l-4.549-14.17 c-0.746-2.651,0.267-5.496,2.52-7.079C30.867,4.407,32.158,4,33.501,4c1.364,0,2.671,0.419,3.781,1.213l2.516,1.798l1.106-1.106 C42.132,4.676,43.764,4,45.5,4s3.368,0.676,4.596,1.904L50.5,6.308l0.404-0.403C52.132,4.676,53.764,4,55.5,4 s3.368,0.676,4.596,1.904l1.106,1.106l2.519-1.8C64.826,4.42,66.134,4,67.499,4c1.343,0,2.634,0.407,3.734,1.179 c2.261,1.593,3.271,4.438,2.523,7.087l-4.715,14.711C81.959,35.506,91,52.087,91,68C91,97,61.213,97,50,97z"
      ></path>
      <path
        fill="#96c362"
        d="M61.399,30.12L67.5,10.5l-7,5l-5-5l-5,5l-5-5l-5,5l-7-5l5.972,19.226 C25.568,35.685,15.5,52.619,15.5,68c0,19.054,15.446,22.5,34.5,22.5S84.5,87.054,84.5,68C84.5,52.942,74.85,36.4,61.399,30.12z"
      ></path>
      <path
        fill="#285e2c"
        d="M50,32c-5.584,0-10.584-0.987-10.794-1.029c-0.812-0.162-1.339-0.952-1.177-1.765 c0.162-0.812,0.952-1.337,1.765-1.177C39.842,28.039,44.724,29,50,29c5.293,0,10.678-0.966,10.732-0.976 c0.812-0.15,1.596,0.393,1.744,1.208c0.148,0.814-0.392,1.595-1.207,1.743C61.038,31.018,55.571,32,50,32z"
      ></path>
      <path
        fill="none"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M61.399,30.12L67.5,10.5l-7,5l-5-5l-5,5l-5-5l-5,5l-7-5l5.972,19.226C25.568,35.685,15.5,52.619,15.5,68 c0,19.054,15.446,22.5,34.5,22.5S84.5,87.054,84.5,68C84.5,52.942,74.85,36.4,61.399,30.12z"
      ></path>
      <path
        fill="#285e2c"
        d="M26.658,69.088c-0.825-0.076-1.432-0.807-1.356-1.631c2.903-31.529,21.69-37.265,22.489-37.494 c0.691-0.196,1.429,0.124,1.753,0.768c0.324,0.644,0.144,1.426-0.428,1.865c-0.542,0.418-13.295,10.509-10.33,29.711 c0.127,0.819-0.435,1.585-1.254,1.712c-0.821,0.125-1.585-0.436-1.711-1.253c-1.713-11.097,1.414-19.424,4.837-24.878 c-5.041,4.734-10.874,13.615-12.369,29.844C28.213,68.557,27.483,69.164,26.658,69.088z"
      ></path>
      <g>
        <path
          fill="#fff"
          d="M50.166,76.916c-0.576,0-1.052-0.194-1.428-0.581c-0.377-0.388-0.565-0.858-0.565-1.411v-1.96 c-1.284-0.089-2.419-0.293-3.404-0.615c-0.985-0.321-1.821-0.658-2.507-1.013c-0.62-0.31-1.008-0.747-1.162-1.312 c-0.155-0.565-0.127-1.107,0.083-1.628c0.21-0.52,0.565-0.897,1.063-1.129c0.498-0.232,1.09-0.183,1.777,0.149 c0.532,0.288,1.273,0.581,2.225,0.88c0.952,0.299,2.114,0.448,3.487,0.448c1.528,0,2.612-0.243,3.255-0.731 c0.642-0.487,0.963-1.096,0.963-1.827c0-0.598-0.221-1.096-0.664-1.494c-0.443-0.399-1.24-0.719-2.391-0.963l-3.654-0.797 c-4.03-0.885-6.044-3.033-6.044-6.443c0-1.86,0.631-3.432,1.893-4.716c1.262-1.284,2.956-2.093,5.082-2.425v-2.092 c0-0.553,0.188-1.024,0.565-1.412c0.376-0.387,0.852-0.581,1.428-0.581c0.553,0,1.018,0.194,1.395,0.581 c0.377,0.388,0.565,0.858,0.565,1.412v1.993c0.819,0.111,1.666,0.31,2.541,0.598c0.874,0.288,1.644,0.664,2.308,1.129 c0.531,0.332,0.858,0.759,0.98,1.279c0.121,0.52,0.072,1.013-0.149,1.478c-0.222,0.465-0.581,0.792-1.079,0.98 c-0.498,0.189-1.102,0.105-1.81-0.249c-0.598-0.287-1.251-0.531-1.96-0.731c-0.709-0.199-1.583-0.299-2.624-0.299 c-1.284,0-2.292,0.266-3.022,0.797c-0.731,0.531-1.096,1.218-1.096,2.059c0,0.598,0.216,1.091,0.648,1.478 c0.432,0.388,1.19,0.703,2.275,0.947l3.687,0.797c2.103,0.465,3.658,1.224,4.666,2.275C58.496,62.84,59,64.185,59,65.824 c0,1.882-0.637,3.432-1.91,4.65c-1.274,1.218-2.928,2.004-4.965,2.358v2.093c0,0.553-0.188,1.024-0.565,1.411 C51.184,76.722,50.719,76.916,50.166,76.916z"
        ></path>
      </g>
    </svg>
  ),
  star: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        d="M31.138 92.311a8.18 8.18 0 0 1-5.753-2.361 8.168 8.168 0 0 1-2.277-7.567l4.011-18.916-14.366-12.946a8.311 8.311 0 0 1-1.548-1.882 7.66 7.66 0 0 1-.6-1.252 7.051 7.051 0 0 1-.297-.883c-.614-2.285-.188-4.759 1.18-6.751a8.18 8.18 0 0 1 5.904-3.509l19.23-2.03 7.875-17.664a8.21 8.21 0 0 1 7.498-4.858c1.017 0 2.015.186 2.967.553a8.133 8.133 0 0 1 4.545 4.312l7.872 17.656 19.232 2.03a8.19 8.19 0 0 1 5.901 3.509 8.222 8.222 0 0 1 1.169 6.793 7.388 7.388 0 0 1-.295.863 7.42 7.42 0 0 1-.597 1.242 8.21 8.21 0 0 1-1.534 1.862L76.882 63.466l4.012 18.917c.179.852.223 1.711.134 2.564a7.445 7.445 0 0 1-.141.831 7.86 7.86 0 0 1-.518 1.633c-.065.146-.16.337-.26.52a8.179 8.179 0 0 1-1.071 1.558l-.146.161a8.335 8.335 0 0 1-1.597 1.34l-.149.094a8.21 8.21 0 0 1-4.301 1.226 8.204 8.204 0 0 1-4.091-1.102L52 81.542l-16.75 9.664a8.055 8.055 0 0 1-1.675.725 6.72 6.72 0 0 1-.642.179 8.014 8.014 0 0 1-1.795.201z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M29.138 90.311a8.18 8.18 0 0 1-5.753-2.361 8.168 8.168 0 0 1-2.277-7.567l4.011-18.916-14.366-12.946a8.311 8.311 0 0 1-1.548-1.882 7.66 7.66 0 0 1-.6-1.252 7.051 7.051 0 0 1-.297-.883c-.614-2.285-.188-4.759 1.18-6.751a8.18 8.18 0 0 1 5.904-3.509l19.23-2.03 7.875-17.664a8.21 8.21 0 0 1 7.498-4.858c1.017 0 2.015.186 2.967.553a8.133 8.133 0 0 1 4.545 4.312l7.872 17.656 19.232 2.03a8.19 8.19 0 0 1 5.901 3.509 8.222 8.222 0 0 1 1.169 6.793 7.388 7.388 0 0 1-.295.863 7.42 7.42 0 0 1-.597 1.242 8.21 8.21 0 0 1-1.534 1.862L74.882 61.466l4.012 18.917c.179.852.223 1.711.134 2.564a7.445 7.445 0 0 1-.141.831 7.86 7.86 0 0 1-.518 1.633c-.065.146-.16.337-.26.52a8.179 8.179 0 0 1-1.071 1.558l-.146.161a8.335 8.335 0 0 1-1.597 1.34l-.149.094a8.21 8.21 0 0 1-4.301 1.226 8.204 8.204 0 0 1-4.091-1.102L50 79.542l-16.75 9.664a8.055 8.055 0 0 1-1.675.725 6.72 6.72 0 0 1-.642.179 8.014 8.014 0 0 1-1.795.201z"
      />
      <path
        fill="#ffe385"
        d="M85.222 43.294c.055-.091.085-.189.121-.286.018-.049.046-.095.059-.145.254-.951-.354-2.035-1.475-2.154l-22.959-2.425-9.401-21.087a1.66 1.66 0 0 0-.943-.887c-.796-.307-1.787-.021-2.191.887l-9.401 21.089-22.959 2.423c-1.123.119-1.73 1.204-1.475 2.155.012.047.039.09.056.136.036.1.068.2.125.294.085.142.192.276.327.398l17.15 15.454-4.79 22.587c-.271 1.277.897 2.302 2.058 2.031.018-.004.035-.016.053-.021a1.72 1.72 0 0 0 .425-.167L50 72.039l19.999 11.536a1.68 1.68 0 0 0 1.767-.045v.001l.003-.002a1.74 1.74 0 0 0 .37-.314l.011-.011a1.71 1.71 0 0 0 .242-.368c.011-.021.026-.039.036-.06.053-.12.084-.25.107-.384.007-.039.024-.074.028-.114a1.747 1.747 0 0 0-.028-.545l-4.79-22.586 17.15-15.454c.135-.123.243-.257.327-.399z"
      />
      <path
        fill="#f9b84f"
        d="m50 50 17.746 9.146 17.041-16.827zM50 16.872V50l10.968-11.716zM50 50l21.511 33.085L50 71.34zM50 50 28.321 83.593l3.933-24.447zM50 50l-35.39-7.766 24.422-3.948z"
      />
      <path
        fill="#40396e"
        d="M29.138 85.311a3.216 3.216 0 0 1-2.253-.932 3.194 3.194 0 0 1-.887-2.958l4.61-21.739-16.507-14.875a3.3 3.3 0 0 1-.609-.74 2.837 2.837 0 0 1-.236-.52 2.173 2.173 0 0 1-.11-.305 3.228 3.228 0 0 1 .464-2.659 3.188 3.188 0 0 1 2.304-1.365l22.1-2.333 9.049-20.298c.695-1.561 2.496-2.294 4.102-1.676a3.17 3.17 0 0 1 1.773 1.677l9.048 20.296 22.1 2.333c.937.1 1.776.598 2.303 1.365.539.784.708 1.757.463 2.669-.022.083-.085.25-.121.327a2.62 2.62 0 0 1-.224.491c-.164.272-.367.52-.604.734l-16.51 14.879 4.61 21.738c.07.333.087.673.052 1.012a2.304 2.304 0 0 1-.054.282 2.99 2.99 0 0 1-.202.668 1.776 1.776 0 0 1-.092.176 3.106 3.106 0 0 1-.429.634l-.055.06a3.29 3.29 0 0 1-.637.535l-.02.013c-1.031.651-2.27.68-3.316.076L50 73.77 30.751 84.875c-.267.153-.519.24-.703.294a1.785 1.785 0 0 1-.2.06 3.114 3.114 0 0 1-.71.082zM16.04 42.428l.024.062.039.108 17.155 15.434c.398.358.575.901.463 1.426l-4.79 22.587c-.013.061-.015.125.053.192.037.036.095.07.157.071a.393.393 0 0 1 .032-.01l20.076-11.56a1.493 1.493 0 0 1 1.499 0l19.999 11.537c.038.021.101.057.215-.014l.001-.002c.015-.016.04-.04.067-.065l.034-.062.002-.012-4.789-22.663a1.5 1.5 0 0 1 .463-1.426l17.15-15.454c0-.002.012-.016.023-.03l.023-.064.02-.051a.251.251 0 0 0-.043-.152c-.034-.049-.076-.072-.146-.08l-22.958-2.424a1.503 1.503 0 0 1-1.212-.882l-9.401-21.087c-.013-.029-.029-.065-.111-.097-.023-.01-.206-.074-.282.097l-9.401 21.089c-.218.489-.68.825-1.213.882L16.23 42.201c-.07.007-.113.03-.146.079a.26.26 0 0 0-.044.148zm55.071 39.484z"
      />
    </svg>
  ),
};

export function Icon({
  size = 14,
  icon = "",
  iconColor,
  strokeWidth = 2,
  className,
}) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      className={className}
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
