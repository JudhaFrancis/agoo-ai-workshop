'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

export function Dropdown({
  trigger,
  children,
  align = 'right',
  width = '48'
}: {
  trigger: React.ReactNode,
  children: React.ReactNode,
  align?: 'left' | 'right',
  width?: string
}) {
  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button as={Fragment}>
        {trigger}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
        >
          <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-slate-800">
            {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function DropdownLink({
  href,
  method = 'get',
  as = 'a',
  children,
  ...props
}: {
  href: string,
  method?: string,
  as?: string,
  children: React.ReactNode,
  [key: string]: any
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={href}
          {...props}
          className={
            'block w-full px-4 py-2 text-left text-sm leading-5 transition duration-150 ease-in-out focus:outline-none ' +
            (active
              ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-gray-100'
              : 'text-slate-700 dark:text-gray-300')
          }
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}
