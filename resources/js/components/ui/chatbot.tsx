'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Plus, ArrowUp } from 'lucide-react';

export default function Chatbot() {
  return (
    <Card className="flex flex-col gap-6 py-6">
      {/* Header */}
      <div className="flex flex-row items-center px-6">
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/avatars/01.png" alt="Sofia Davis" />
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs text-muted-foreground">m@example.com</p>
          </div>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className="ml-auto size-8 rounded-full"
        >
          <Plus className="size-4" />
          <span className="sr-only">New message</span>
        </Button>
      </div>

      {/* Messages */}
      <CardContent className="px-6">
        <div className="flex flex-col gap-4">
          <div className="w-max max-w-[75%] rounded-lg bg-muted px-3 py-2 text-sm">
            Hi, how can I help you today?
          </div>
          <div className="ml-auto w-max max-w-[75%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
            Hey, I'm having trouble with my account.
          </div>
          <div className="w-max max-w-[75%] rounded-lg bg-muted px-3 py-2 text-sm">
            What seems to be the problem?
          </div>
          <div className="ml-auto w-max max-w-[75%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
            I can't log in.
          </div>
        </div>
      </CardContent>

      {/* Input */}
      <div className="flex items-center px-6">
        <form className="relative w-full">
          <Input
            id="message"
            placeholder="Type your message..."
            className="pr-10"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 size-6 rounded-full"
            disabled
          >
            <ArrowUp className="size-3.5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </Card>
  );
}