import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { demos } from "@/lib/demos"
// import  GlobalNavItem  from './global-nav'
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full content-center ps-3">

        <AccordionItem value="item-1">
          <AccordionTrigger className="divide-y-2 divide-white">Is it accessible?</AccordionTrigger>
          
          <AccordionContent className="block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300 ps-5 divide-y-2 divide-white">
            Yes. It adheres to the WAI-ARIA design pattern.
           
          </AccordionContent>
          <AccordionContent className="ps-5 divide-x ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>

          <AccordionContent className="ps-5 divide-x ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    )
  }
  