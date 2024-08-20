'use client';

import { BoxIcon, Button, ToggleTheme, Text } from '@/components';
import { ArrowRight } from '@/icons';
import { TEXT_SIZE } from '@/types/text';
import Image from 'next/image';
import { Link } from '@nextui-org/react';

const SignInPage = () => (
  <>
    <div className="flex relative">
      <div className="flex flex-1 justify-center">
        <div className="h-full py-10 flex flex-col justify-between">
          <div>
            <Link href="/dashboard">
              <Button
                startContent={
                  <BoxIcon icon={<ArrowRight />} customClass="fill-secondary" />
                }
                className="text-secondary bg-transparent"
              >
                Back to dashboard
              </Button>
            </Link>
          </div>
          <div className="">
            <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
              Sign In
            </Text>
            <Text
              as="h2"
              size={TEXT_SIZE['md']}
              className="dark:text-secondary"
            >
              Enter your username and password to sign in!
            </Text>
          </div>

          <Text className="text-secondary" size={TEXT_SIZE.sm}>
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simple!
          </Text>
        </div>
      </div>
      {/*  */}
      <div className="">
        <div className="w-[965px] h-[1152px] relative">
          <Image
            src="/wallpaper.png"
            alt="wall-paper"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
          <div className="bottom-7 right-7 absolute">
            <ToggleTheme variant="secondary" />
          </div>
          <div className="absolute bottom-12 left-72">
            <footer className="flex justify-between">
              <div className="flex gap-11">
                <Link href="/nft-marketplace">
                  <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                    Marketplace
                  </Text>
                </Link>
                <Link href="/license">
                  <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                    License
                  </Text>
                </Link>
                <Link href="/terms-of-use">
                  <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                    Terms of Use
                  </Text>
                </Link>
                <Link href="/blog">
                  <Text as="span" className="text-white" size={TEXT_SIZE.sm}>
                    Blog
                  </Text>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SignInPage;
