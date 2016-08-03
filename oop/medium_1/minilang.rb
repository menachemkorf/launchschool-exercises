require 'pry'

class MinilangRuntimeError < RuntimeError; end
class BadTokenError < MinilangRuntimeError; end
class EmptyStackError < MinilangRuntimeError; end


class Minilang

  COMMANDS = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)

  def initialize(commands)
    @commands = commands.split
    @stack = []
    @register = 0
  end

  def eval
    @commands.each do |command|
      if COMMANDS.include?(command)
        self.send(command.downcase)
      elsif command.to_i.to_s == command
        @register = command.to_i
      else
        raise BadTokenError, "Invalid token: #{command}"
      end

    end
  end

  def print
    puts @register
  end

  def push
    @stack.push(@register)
    # @register = 0
  end

  def pop
    raise EmptyStackError 'Empty stack!' if @stack.empty?
    @register = @stack.pop
  end

  def mult
    @register *= pop #* @register
  end

  def add
    @register += pop #+ @register
  end

  def sub
    @register -= pop #- @register
  end

  def div
    @register /= pop #/ @register
  end

  def mod
    @register %= pop #% @register
  end
end


Minilang.new('PRINT').eval
# 0

# Minilang.new('5 PRINT').eval

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# # 5
# # 3
# # 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# # 10
# # 5

# Minilang.new('5 PUSH POP POP PRINT').eval
# # Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT').eval
# # 6
#
Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# # 12

# Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# # Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# # 8

Minilang.new('6 PUSH').eval
# # (nothing printed; no PRINT commands)